import AuthError from '../../Utils/AuthError';
import { ReservationModel } from '../../models';
import { CreateReservationInput, ErrorType, GraphQLContext } from '../../types';
import moment from 'moment';

export const ReservationResolver = {
    Query: {
        reservations: async () => {
            return await ReservationModel.find();
        },
        reservation: async (_: any, { id }: { id: string }) => {
            return await ReservationModel.findById(id);
        }
    },
    Mutation: {
        createReservation: async (
            _: any,
            { input }: { input: CreateReservationInput },
            __: GraphQLContext
        ) => {
            const {
                date,
                hour,
                numberOfPeople,
            } = input;

            // Check if the date is today or in the future
            const reservationDate = moment(`${date} ${hour}`, 'YYYY-MM-DD hh:mm A');
            const now = moment();
            if (reservationDate.isBefore(now)) {
                throw new Error('Reservation date and time must be in the future');
            }

            // Check if the maximum number of people is exceeded
            const totalNumberOfPeople = await ReservationModel.aggregate([
                {
                    $match: {
                        date: reservationDate.toISOString().split('T')[0],
                    },
                },
                {
                    $group: {
                        _id: null,
                        totalPeople: { $sum: '$numberOfPeople' },
                    },
                },
            ]);

            const maxPeoplePerDay = 50;
            if (totalNumberOfPeople.length > 0 && totalNumberOfPeople[0].totalPeople + numberOfPeople > maxPeoplePerDay) {
                throw new Error('Maximum number of people exceeded for this day');
            }

            // Check if the maximum reservations per day is exceeded
            const reservationsForDay = await ReservationModel.find({
                date: reservationDate.toISOString().split('T')[0],
            });

            const maxReservationsPerDay = 20;
            if (reservationsForDay.length >= maxReservationsPerDay) {
                throw new Error('Maximum reservations for this day exceeded');
            }
            const reservation = new ReservationModel(input);
            return await reservation.save();
        },
        deleteReservation: async (
            _: any,
            { id }: { id: string },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.DELETE_RESERVATION);
            }

            const reservation = await ReservationModel.findById(id);
            if (!reservation) {
                throw new Error(ErrorType.NOT_FOUND_RESERVATION);
            }

            return await reservation.deleteOne();
        }
    }
};

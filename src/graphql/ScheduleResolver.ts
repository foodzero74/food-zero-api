import AuthError from '../utils/AuthError';
import { ScheduleModel } from '../models';

import { CreateScheduleInput, ErrorType, GraphQLContext, UpdateScheduleInput } from '../types';

export const ScheduleResolver = {
    Query: {
        schedules: async () => {
            return await ScheduleModel.find({}).sort({ openTime: 1 });
        },
    },
    Mutation: {
        createSchedule: async (
            _: any,
            { input }: { input: CreateScheduleInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.CREATE_SCHEDULE);
            }

            const schedule = new ScheduleModel(input);
            return await schedule.save();
        },
        updateSchedule: async (
            _: any,
            { input }: { input: UpdateScheduleInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.UPDATE_SCHEDULE);
            }

            const schedule = await ScheduleModel.findById(input.id);
            if (!schedule) {
                throw new Error(ErrorType.NOT_FOUND_SCHEDULE);
            }

            if (input.name) schedule.name = input.name;
            if (input.openTime) schedule.openTime = input.openTime;
            if (input.closeTime) schedule.closeTime = input.closeTime;

            return await schedule.save();
        },
        deleteSchedule: async (
            _: any,
            { id }: { id: string },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.DELETE_SCHEDULE);
            }

            const schedule = await ScheduleModel.findById(id);
            if (!schedule) {
                throw new Error(ErrorType.NOT_FOUND_SCHEDULE);
            }
            return await schedule.deleteOne();
        }
    }
};

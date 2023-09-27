import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        default: "created"
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
}, { collection: 'reservations' });


export const ReservationModel = mongoose.model('Reservations', ReservationSchema);

import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    openTime: {
        type: String,
        required: true
    },
    closeTime: {
        type: String,
        required: true
    },
}, { collection: 'schedules' });

export const ScheduleModel = mongoose.model('Schedule', ScheduleSchema);

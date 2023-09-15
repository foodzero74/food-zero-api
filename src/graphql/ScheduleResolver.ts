import { ScheduleModel } from '../models/Schedule';

export const ScheduleResolver = {
    Query: {
        schedules: async () => {
            return ScheduleModel.find({}).sort({ openTime: 1 });
        },
    }
};

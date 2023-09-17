import mongoose, { Document, Model } from 'mongoose';
import { ErrorType } from '../types/index';

interface ISchedule extends Document {
    name: string;
    openTime: string;
    closeTime: string;
}

interface IScheduleModel extends Model<ISchedule> {
    doesOverlap(newSchedule: ISchedule): Promise<boolean>;
}

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

ScheduleSchema.statics.doesOverlap = async function (newSchedule) {
    const existingSchedules = await this.find();

    if (existingSchedules.length === 1) {
        return false;
    }

    for (const existingSchedule of existingSchedules) {
        if (
            existingSchedule._id.toString() !== newSchedule._id.toString() && 
            newSchedule.openTime < existingSchedule.closeTime &&
            newSchedule.closeTime > existingSchedule.openTime
        ) {
            return true;
        }
    }

    return false;
};

ScheduleSchema.pre('save', async function (next) {
    const schemaConstructor = this.constructor as IScheduleModel; 
    const doesOverlap = await schemaConstructor.doesOverlap(this);
    if (doesOverlap) {
        const err = new Error(ErrorType.OVERLAP_SCHEDULE);
        next(err);
    } else {
        next();
    }
});

export const ScheduleModel = mongoose.model<ISchedule, IScheduleModel>('Schedule', ScheduleSchema);

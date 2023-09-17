import mongoose, { Document, Model } from 'mongoose';
import { ErrorType } from '../types/index';

// Define an interface for the schedule document
interface ISchedule extends Document {
    name: string;
    openTime: string;
    closeTime: string;
}

// Define a static method on the schedule model
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

// Define the static method
ScheduleSchema.statics.doesOverlap = async function (newSchedule) {
    const existingSchedules = await this.find();

    if (existingSchedules.length === 1) {
        return false;
    }

    for (const existingSchedule of existingSchedules) {
        if (
            existingSchedule._id.toString() !== newSchedule._id.toString() && // Exclude the current schedule
            newSchedule.openTime < existingSchedule.closeTime &&
            newSchedule.closeTime > existingSchedule.openTime
        ) {
            return true;
        }
    }

    return false;
};

// Add a pre-save middleware to check for overlap before saving a new schedule
ScheduleSchema.pre('save', async function (next) {
    const schemaConstructor = this.constructor as IScheduleModel; // Cast to correct type
    const doesOverlap = await schemaConstructor.doesOverlap(this);
    if (doesOverlap) {
        const err = new Error(ErrorType.OVERLAP_SCHEDULE);
        next(err);
    } else {
        next();
    }
});

export const ScheduleModel = mongoose.model<ISchedule, IScheduleModel>('Schedule', ScheduleSchema);

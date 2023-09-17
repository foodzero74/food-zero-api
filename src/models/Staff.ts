import mongoose from 'mongoose';

const StaffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        default: false
    },
}, { collection: 'staff' });


export const StaffModel = mongoose.model('Staff', StaffSchema);

import mongoose from 'mongoose';

const MeatProcessSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
}, { collection: 'meat_process' });


export const MeatProcessModel = mongoose.model('MeatProcess', MeatProcessSchema);

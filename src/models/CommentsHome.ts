import mongoose from 'mongoose';

const CommentsHomeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
}, { collection: 'comments_home' });


export const CommentsHomeModel = mongoose.model('CommentsHome', CommentsHomeSchema);

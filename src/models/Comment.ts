import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    disabled: {
        type: Boolean,
        required: true,
        default: false
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
    },
}, { collection: 'comments' });


export const CommentModel = mongoose.model('Comments', CommentSchema);

import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comments',
        },
    ],
    disabled: {
        type: Boolean,
        required: true,
        default: false
    }
}, { collection: 'blog' });


export const BlogModel = mongoose.model('Blog', BlogSchema);

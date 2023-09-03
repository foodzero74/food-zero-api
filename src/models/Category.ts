import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
}, { collection: 'categories' });

export const CategoryModel = mongoose.model('Category', CategorySchema);

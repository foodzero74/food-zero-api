import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  priority: Number,
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  disabled: {
    type: Boolean,
    default: false
  }
});

export const ProductModel = mongoose.model('Product', productSchema);

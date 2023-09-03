import { Product } from "../models/Product";
import { Category } from "../models/Category";

export const ProductResolver = {
  Query: {
    products: async () => {
      return await Product.find({}).populate('categories');
    },
    categories: async () => {
      return await Category.find({});
    }
  },
};

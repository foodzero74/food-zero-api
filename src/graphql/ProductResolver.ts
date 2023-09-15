import AuthError from '../Utils/AuthError';
import { CategoryModel, ProductModel } from '../models';
import { CreateProductInput, GraphQLContext, UpdateProductInput } from '../types';
import mongoose from 'mongoose';

export const ProductResolver = {
  Query: {
    products: async () => {
      return await ProductModel.find({ disabled: false })
        .populate({
          path: 'categories',
          match: { disabled: { $ne: true } }
        });
    },
    productsByCategoryId: async (_: any, { categoryId }: { categoryId: string }) => {
      return await ProductModel.find({ categories: categoryId, disabled: false });
    }
  },
  Mutation: {
    createProduct: async (
      _: any,
      { input }: { input: CreateProductInput },
      context: GraphQLContext
    ) => {
      if (!context.user) {
        AuthError.throw('You must be logged in to create a product.');
      }

      const product = new ProductModel(input);
      const savedProduct = await product.save();

      // Attaching the product to specified categories
      for (const catId of input.categories) {
        const category = await CategoryModel.findById(catId);
        if (category) {
          category.products.push(savedProduct._id);
          await category.save();
        }
      }

      return savedProduct;
    },
    updateProduct: async (
      _: any,
      { input }: { input: UpdateProductInput },
      context: GraphQLContext
    ) => {
      if (!context.user) {
        AuthError.throw('You must be logged in to update a product.');
      }

      const product = await ProductModel.findById(input.id);
      if (!product) {
        throw new Error("Product not found");
      }

      if (input.name) product.name = input.name;
      if (input.description) product.description = input.description;
      if (input.price) product.price = input.price;
      if (input.image) product.image = input.image;
      if (input.priority) product.priority = input.priority;
      if (input.categories) {
        const oldCategories = product.categories;
        // Remove product ID from old categories
        await CategoryModel.updateMany(
          { _id: { $in: oldCategories } },
          { $pull: { products: product._id } }
        );
        // Add product ID to new categories
        await CategoryModel.updateMany(
          { _id: { $in: input.categories } },
          { $addToSet: { products: product._id } }
        );
        product.categories = input.categories.map(id => new mongoose.Types.ObjectId(id));
      }
      if (typeof input.disabled !== 'undefined') product.disabled = input.disabled;

      return await product.save();
    }
  }
};

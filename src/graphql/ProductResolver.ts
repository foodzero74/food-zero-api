import { AuthenticationError } from 'apollo-server-express';
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
        throw new AuthenticationError('You must be logged in to create a product.');
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
        throw new AuthenticationError('You must be logged in to update a product.');
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
        for (const oldCatId of oldCategories) {
          const oldCategory = await CategoryModel.findById(oldCatId);
          if (oldCategory) {
            oldCategory.products = oldCategory.products.filter(
              prodId => !prodId.equals(product._id)
            );
            await oldCategory.save();
          }
        }
        product.categories = [];
        for (const newCatId of input.categories) {
          const newCategory = await CategoryModel.findById(newCatId);
          if (newCategory && !newCategory.products.includes(product._id)) {
            newCategory.products.push(product._id);
            await newCategory.save();
          }
          product.categories.push(new mongoose.Types.ObjectId(newCatId));
        }
      }
      if (typeof input.disabled !== 'undefined') product.disabled = input.disabled;

      return await product.save();
    }
  }
};

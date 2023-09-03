import { AuthenticationError } from 'apollo-server-express';
import { Product } from "../models/Product";
import { Category } from "../models/Category";
import { CreateCategoryInput, GraphQLContext } from '../types';

export const ProductResolver = {
  Query: {
    products: async () => {
      return await Product.find({}).populate('categories');
    },
    categories: async () => {
      return await Category.find({});
    },
    categoryById: async (_: any, { categoryId }: { categoryId: string }) => {
      return await Category.findById(categoryId);
    },

    productsByCategoryId: async (_: any, { categoryId }: { categoryId: string }) => {
      return await Product.find({ categories: categoryId });
    }
  },
  Mutation: {
    createCategory: async (
      _: unknown,
      { input }: { input: CreateCategoryInput },
      context: GraphQLContext
    ) => {
      if (!context.user) {
        throw new AuthenticationError('You must be logged in to create a category.');
      }

      try {
        const category = new Category(input);
        await category.save();
        return category;
      } catch (error) {
        throw new Error('Failed to create category');
      }
    }
  }
};

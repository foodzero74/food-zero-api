import { AuthenticationError } from 'apollo-server-express';
import { CategoryModel, ProductModel } from '../models';
import { CreateProductInput, GraphQLContext } from '../types';

export const ProductResolver = {
  Query: {
    products: async () => {
      return await ProductModel.find({}).populate('categories');
    },
    productsByCategoryId: async (_: any, { categoryId }: { categoryId: string }) => {
      return await ProductModel.find({ categories: categoryId });
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
    }
  }
};

import { AuthenticationError } from 'apollo-server-express';
import { CategoryModel } from "../models/Category";
import { CreateCategoryInput, GraphQLContext } from '../types';

export const CategoryResolver = {
    Query: {
        categories: async () => {
            return await CategoryModel.find({}).populate('products');;
        },
        categoryById: async (_: any, { categoryId }: { categoryId: string }) => {
            return await CategoryModel.findById(categoryId);
        },
    },
    Mutation: {
        createCategory: async (
            _: any,
            { input }: { input: CreateCategoryInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                throw new AuthenticationError('You must be logged in to create a category.');
            }

            const category = new CategoryModel(input);
            return await category.save();
        }
    }
};

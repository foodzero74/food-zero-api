import { CategoryModel } from "../models/Category";
import { CreateCategoryInput, GraphQLContext, UpdateCategoryInput } from '../types';
import { ProductModel } from '../models';
import AuthError from "../Utils/AuthError";

export const CategoryResolver = {
    Query: {
        categories: async () => {
            return await CategoryModel.find({ disabled: { $ne: true } })
                .populate({
                    path: 'products',
                    match: { disabled: { $ne: true } }
                });
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
                AuthError.throw('You must be logged in to create a category.');
            }

            const category = new CategoryModel(input);
            return await category.save();
        },
        updateCategory: async (
            _: any,
            { input }: { input: UpdateCategoryInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw('You must be logged in to update a category.');
            }

            const category = await CategoryModel.findById(input.id);
            if (!category) {
                throw new Error("Category not found");
            }

            if (input.name) category.name = input.name;
            if (input.description) category.description = input.description;
            if (input.image) category.image = input.image;
            if (typeof input.disabled === 'undefined') {
                return await category.save();
            }
            category.disabled = input.disabled;
            category.products = category.products
            if (input.disabled) {
                await ProductModel.updateMany(
                    { categories: input.id },
                    { $pull: { categories: input.id } }
                );
                await ProductModel.updateMany(
                    { categories: [] },
                    { disabled: true }
                );
                category.products = [];
            }
            return await category.save();
        }
    }
};

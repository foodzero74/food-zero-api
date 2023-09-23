import { FoodSpecsModel } from '../../models';
import { UpdateStaffInput, GraphQLContext, ErrorType, CreateFoodSpecInput, UpdateFoodSpecInput } from '../../types';
import AuthError from '../../Utils/AuthError';

export const FoodSpecsResolver = {
    Query: {
        foodSpecs: async () => {
            return await FoodSpecsModel.find({});
        },
    },
    Mutation: {
        createFoodSpec: async (
            _: any,
            { input }: { input: CreateFoodSpecInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.CREATE_FOOD_SPEC);
            }

            const foodSpec = new FoodSpecsModel(input);
            return await foodSpec.save();
        },
        updateFoodSpec: async (
            _: any,
            { input }: { input: UpdateFoodSpecInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.UPDATE_FOOD_SPEC);
            }

            return await FoodSpecsModel.findByIdAndUpdate(input.id, input, { new: true });
        },
        deleteFoodSpec: async (
            _: any,
            { id }: { id: string },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.DELETE_FOOD_SPEC);
            }

            const foodSpec = await FoodSpecsModel.findById(id);
            if (!foodSpec) {
                throw new Error(ErrorType.NOT_FOUND_FOOD_SPEC);
            }

            return await foodSpec.deleteOne();
        }
    },
};

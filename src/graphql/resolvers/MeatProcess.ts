import { MeatProcessModel } from '../../models';
import { GraphQLContext, ErrorType, CreateMeatProcessInput, UpdateMeatProcessInput } from '../../types';
import AuthError from '../../Utils/AuthError';

export const MeatProcessResolver = {
    Query: {
        getAllMeatProcess: async () => {
            return await MeatProcessModel.find({});
        },
        getMeatProcess: async (
            _: any,
            { id }: { id: string }
        ) => {
            const meatProcess = await MeatProcessModel.findById(id);
            if (!meatProcess) {
                throw new Error(ErrorType.NOT_FOUND_MEAT_PROCESS);
            }
            return meatProcess;
        }
    },
    Mutation: {
        createMeatProcess: async (
            _: any,
            { input }: { input: CreateMeatProcessInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.CREATE_MEAT_PROCESS);
            }

            const meatProcess = new MeatProcessModel(input);
            return await meatProcess.save();
        },
        updateMeatProcess: async (
            _: any,
            { input }: { input: UpdateMeatProcessInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.UPDATE_MEAT_PROCESS);
            }

            return await MeatProcessModel.findOneAndUpdate(
                { _id: input.id },
                input,
                { new: true }
            );
        },
        deleteMeatProcess: async (
            _: any,
            { id }: { id: string },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.DELETE_MEAT_PROCESS);
            }

            const meatProcess = await MeatProcessModel.findById(id);
            if (!meatProcess) {
                throw new Error(ErrorType.NOT_FOUND_FOOD_SPEC);
            }

            return await meatProcess.deleteOne();
        }
    },
};

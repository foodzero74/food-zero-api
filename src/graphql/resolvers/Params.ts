import { CreateParamInput, GraphQLContext, UpdateParamInput } from '../../types';
import { CommentsHomeModel, ParamsModel } from '../../models';

export const ParamsResolver = {
    Query: {
        getParams: async () => {
            return await CommentsHomeModel.findOne();
        },
    },
    Mutation: {
        createParam: async (
            _: any,
            { input }: { input: CreateParamInput },
            __: GraphQLContext
        ) => {
            const params = new ParamsModel(input);
            return await params.save();
        },
        updateParam: async (
            _: any,
            { input }: { input: UpdateParamInput },
            __: GraphQLContext
        ) => {
            return await ParamsModel.findOneAndUpdate(
                { _id: input.id },
                input,
                { new: true }
            );
        },
    }
};

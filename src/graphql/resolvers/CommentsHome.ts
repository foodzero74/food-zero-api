import { CreateCommentHomeInput, GraphQLContext } from '../../types';
import { CommentsHomeModel } from '../../models';

export const CommentHomeResolver = {
    Query: {
        getAllCommentsHome: async () => {
            return await CommentsHomeModel.find();
        },
        getCommentHome: async (_: any, { id }: { id: string }) => {
            return await CommentsHomeModel.findOne({ _id: id })
        },
    },
    Mutation: {
        createCommentHome: async (
            _: any,
            { input }: { input: CreateCommentHomeInput },
            __: GraphQLContext
        ) => {
            const commentHome = new CommentsHomeModel(input);
            return await commentHome.save();
        },
    }
};

import { CreateCommentHomeInput, ErrorType, GraphQLContext } from '../../types';
import { CommentsHomeModel } from '../../models';
import AuthError from '../../Utils/AuthError';

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
        deleteCommentHome: async (
            _: any,
            { id }: { id: string },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.DELETE_COMMENT);
            }
            const comment = await CommentsHomeModel.findById(id);
            if (!comment) {
                throw new Error(ErrorType.NOT_FOUND_COMMENT);
            }
            return await comment.deleteOne();
        }
    },
};

import { CreateCommentInput, ErrorType, GraphQLContext } from '../../types';
import { BlogModel, CommentModel } from '../../models';

export const CommentResolver = {
    Query: {
        getAllComments: async () => {
            return await CommentModel.find({ disabled: { $ne: true } })
                .populate({
                    path: 'blogId',
                    match: { disabled: { $ne: true } }
                });
        },
        getComment: async (_: any, { id }: { id: string }) => {
            return await CommentModel.findOne({ _id: id, disabled: { $ne: true } }).populate({
                path: 'blogId',
                match: { disabled: { $ne: true } }
            });
        },
    },
    Mutation: {
        createComment: async (
            _: any,
            { input }: { input: CreateCommentInput },
            __: GraphQLContext
        ) => {
            const blogPost = await BlogModel.findById(input.blogId);
            if (!blogPost) {
                throw new Error(ErrorType.NOT_FOUND_BLOG);
            }
            const comment = new CommentModel(input);
            blogPost.comments.push(comment._id);
            await blogPost.save();
            return await comment.save();
        },
    }
};

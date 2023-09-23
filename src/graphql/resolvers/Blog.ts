import { CreateBlogInput, ErrorType, GraphQLContext, UpdateBlogInput, UpdateBlogStateInput } from '../../types';
import { BlogModel, CommentModel } from '../../models';
import AuthError from "../../Utils/AuthError";

export const BlogResolver = {
    Query: {
        getAllBlogs: async () => {
            return await BlogModel.find({ disabled: { $ne: true } })
                .populate({
                    path: 'comments',
                    match: { disabled: { $ne: true } }
                });
        },
        getBlog: async (_: any, { id }: { id: string }) => {
            return await BlogModel.findOne({ _id: id, disabled: { $ne: true } }).populate({
                path: 'comments',
                match: { disabled: { $ne: true } }
            });;
        },
    },
    Mutation: {
        createBlog: async (
            _: any,
            { input }: { input: CreateBlogInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.CREATE_BLOG);
            }

            const blogPost = new BlogModel(input);
            return await blogPost.save();
        },
        updateBlog: async (
            _: any,
            { input }: { input: UpdateBlogInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.UPDATE_BLOG);
            }

            const blogPost = await BlogModel.findById(input.id);
            if (!blogPost) {
                throw new Error(ErrorType.CREATE_BLOG);
            }

            if (input.title) blogPost.title = input.title;
            if (input.content) blogPost.content = input.content;
            if (input.slug) blogPost.slug = input.slug;
            if (input.image) blogPost.image = input.image;
            if (typeof input.disabled === 'undefined') {
                return await blogPost.save();
            }
            blogPost.disabled = input.disabled;
            if (input.disabled) {
                await CommentModel.updateMany({ _id: { $in: blogPost.comments } }, { $set: { disabled: true } });
            }
            return await blogPost.save();
        },
        updateStatusBlog: async (
            _: any,
            { input }: { input: UpdateBlogStateInput },
            context: GraphQLContext
        ) => {
            if (!context.user) {
                AuthError.throw(ErrorType.UPDATE_BLOG);
            }
            const blogPost = await BlogModel.findOne({ _id: input.id });
            if (!blogPost) {
                throw new Error(ErrorType.NOT_FOUND_BLOG);
            }
            blogPost.disabled = input.disabled;
            await CommentModel.updateMany({ _id: { $in: blogPost.comments } }, { $set: { disabled: input.disabled } });
            return await blogPost.save();
        }
    }
};

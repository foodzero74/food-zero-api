import gql from 'graphql-tag';

export const BlogTypeDef = gql`
  type Blog {
    id: ID!
    image: String!
    title: String!
    content: String!
    slug: String!
    comments: [Comment!]
    disabled: Boolean!
  }

  input CreateBlogInput {
    image: String!
    title: String!
    content: String!
    slug: String!
  }

  input UpdateBlogInput {
    id: ID!
    image: String
    title: String
    content: String
    slug: String
    disabled: Boolean
  }

  input UpdateBlogStateInput {
    id: ID!
    disabled: Boolean!
  }

  extend type Query {
    getBlog(id: ID!): Blog!
    getAllBlogs: [Blog!]
   }

  extend type Mutation {
    createBlog(input: CreateBlogInput!): Blog!
    updateBlog(input: UpdateBlogInput!): Blog!
    updateStatusBlog(input: UpdateBlogStateInput!): Blog!
  }
`;

import gql from 'graphql-tag';

export const CommentTypeDef = gql`
  type Comment {
    id: ID!
    comment: String!
    name: String!
    disabled: Boolean!
    blog: Blog!
  }

  input CreateCommentInput {
    comment: String!
    name: String!
    blogId: ID!
  }

  extend type Query {
    getComment(id: ID!): Comment!
    getAllComments: [Comment!]
  }

  extend type Mutation {
    createComment(input: CreateCommentInput!): Comment!
  }
`;

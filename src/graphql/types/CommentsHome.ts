import gql from 'graphql-tag';

export const CommentsHomeTypeDef = gql`
  type CommentHome {
    id: ID!
    comment: String!
    name: String!
    stars: Int!
  }

  input CreateCommentHomeInput {
    comment: String!
    name: String!
    stars: Int!
  }

  extend type Query {
    getCommentHome(id: ID!): CommentHome!
    getAllCommentsHome: [CommentHome!]
  }

  extend type Mutation {
    createCommentHome(input: CreateCommentHomeInput!): CommentHome!
    deleteCommentHome(id: ID!): CommentHome
  }
`;

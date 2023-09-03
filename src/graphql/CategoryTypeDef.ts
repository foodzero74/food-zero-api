import { gql } from 'apollo-server-express';

export const CategoryTypeDef = gql`
  type Category {
    id: ID!
    name: String!
    description: String
    image: String
    products: [Product]
  }

  input CategoryInput {
    name: String!
    description: String!
    image: String!
  }

  extend type Query {
    categories: [Category!]
    categoryById(categoryId: ID!): Category
  }

  extend type Mutation {
    createCategory(input: CategoryInput!): Category!
  }
`;

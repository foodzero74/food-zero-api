import { gql } from 'apollo-server-express';

export const CategoryTypeDef = gql`
  type Category {
    id: ID!
    name: String!
    description: String!
    image: String!
    disabled: Boolean
    products: [Product]
  }

  input UpdateCategoryInput {
    id: ID!
    name: String
    description: String
    image: String
    disabled: Boolean
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
    updateCategory(input: UpdateCategoryInput!): Category!
  }
`;

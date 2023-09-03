import { gql } from 'apollo-server-express';

export const ProductTypeDef = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    image: String
    priority: Int!
    categories: [Category]
  }

  input CreateProductInput {
    name: String!
    description: String
    price: Float!
    image: String
    priority: Int!
    categories: [ID!]!
  }

  extend type Query {
    products: [Product!]
    productsByCategoryId(categoryId: ID!): [Product!]
  }

  extend type Mutation {
    createProduct(input: CreateProductInput!): Product!
  }
`;

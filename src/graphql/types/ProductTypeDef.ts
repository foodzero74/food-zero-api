import gql from 'graphql-tag';

export const ProductTypeDef = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    image: String
    priority: Int!
    categories: [Category]
    disabled: Boolean!
  }

  input CreateProductInput {
    name: String!
    description: String!
    price: Float!
    image: String!
    priority: Int!
    categories: [ID!]!
  }

  input UpdateProductInput {
    id: ID!
    name: String
    description: String
    price: Float
    image: String
    priority: Int
    categories: [ID!]
    disabled: Boolean
  }

  extend type Query {
    products: [Product!]
    productsByCategoryId(categoryId: ID!): [Product!]
  }

  extend type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(input: UpdateProductInput!): Product!
  }
`;

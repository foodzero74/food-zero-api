import { gql } from 'apollo-server-express';

export const ProductTypeDef = gql`
  type Category {
    id: ID!
    name: String!
  }

  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    image: String
    priority: Int!
    categories: [Category]
  }

  extend type Query {
    products: [Product!]
    categories: [Category!]
  }
`;

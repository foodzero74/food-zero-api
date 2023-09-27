import gql from 'graphql-tag';

export const ContactsTypeDef = gql`
  type Contact {
    id: ID!
    email: String!
  }

  input CreateContactInput {
    email: String!
  }

  extend type Query {
    getContacts: [Contact!]
  }

  extend type Mutation {
    createContact(input: CreateContactInput!): Contact!
  }
`;

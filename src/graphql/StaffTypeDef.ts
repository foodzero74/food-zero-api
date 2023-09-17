import gql from 'graphql-tag';

export const StaffTypeDef = gql`
  type Staff {
    id: ID!
    name: String!
    description: String!
    image: String!
    role: String!
    disabled: Boolean!
  }

  input CreateStaffInput {
  name: String!
  description: String!
  image: String!
  role: String!
}

input UpdateStaffInput {
  id: ID!
  name: String
  description: String
  image: String
  role: String
}


  extend type Query {
    staff: [Staff!]
  }

  extend type Mutation {
  createStaff(input: CreateStaffInput!): Staff!
  updateStaff(input: UpdateStaffInput!): Staff!
  deleteStaff(id: ID!): Staff!
  undeleteStaff(id: ID!): Staff!
}
`;

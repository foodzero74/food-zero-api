import gql from 'graphql-tag';

export const ScheduleTypeDef = gql`
  type Schedule {
    id: ID!
    name: String!
    openTime: String!
    closeTime: String!
  }

  input UpdateScheduleInput {
    id: ID!
    name: String
    openTime: String
    closeTime: String
  }

  input ScheduleInput {
    name: String!
    openTime: String!
    closeTime: String!
  }

  extend type Query {
    schedules: [Schedule!]
  }

  extend type Mutation {
    createSchedule(input: ScheduleInput!): Schedule!
    updateSchedule(input: UpdateScheduleInput!): Schedule!  
    deleteSchedule(id: ID!): Schedule!
  }
`;

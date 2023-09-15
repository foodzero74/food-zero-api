import gql from 'graphql-tag';

export const ScheduleTypeDef = gql`
  type Schedule {
    id: ID!
    name: String!
    openTime: String!
    closeTime: String!
  }

  extend type Query {
    schedules: [Schedule!]
  }
`;

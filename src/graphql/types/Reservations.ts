import gql from 'graphql-tag';

export const ReservationsTypeDef = gql`
  type Reservation {
    id: ID!
    firstName: String!
    surname: String!
    email: String!
    phone: String!
    date: String!
    hour: String!
    state: String!
    numberOfPeople: Int!
  }

  input CreateReservationInput {
    firstName: String!
    surname: String!
    email: String!
    phone: String!
    date: String!
    hour: String!
    state: String
    numberOfPeople: Int!
  }

  type Query {
    reservation(id: ID!): Reservation
    reservations: [Reservation]
  }

  extend type Mutation {
    createReservation(input: CreateReservationInput!): Reservation
    deleteReservation(id: ID!): Reservation
  }
`;

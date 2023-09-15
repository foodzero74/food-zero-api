import gql from 'graphql-tag';

export const RootTypeDef = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String 
  }
`;

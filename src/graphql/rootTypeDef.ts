// rootTypeDef.ts
import { gql } from 'apollo-server-express';

export const RootTypeDef = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String 
  }
`;

import gql from 'graphql-tag';

export const MeatProcessTypeDef = gql`
    type MeatProcess {
        id: ID!
        image: String!
        name: String!
        description: String!
        order: Int!
    }

    input CreateMeatProcessInput {
        image: String!
        name: String!
        description: String!
        order: Int!
    }

    input UpdateMeatProcessInput {
        id: ID!
        image: String
        name: String
        description: String
        order: Int
    }

    extend type Query {
        getMeatProcess(id: ID!): MeatProcess!
        getAllMeatProcess: [MeatProcess!]
    }

    extend type Mutation {
        createMeatProcess(input: CreateMeatProcessInput!): MeatProcess!
        updateMeatProcess(input: UpdateMeatProcessInput!): MeatProcess
        deleteMeatProcess(id: ID!): MeatProcess!
    }
`;

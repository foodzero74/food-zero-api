import gql from 'graphql-tag';

export const FoodSpecsTypeDef = gql`
    type FoodSpec {
        id: ID!
        image: String!
        title: String!
        content: String!
    }

    input CreateFoodSpecInput {
        image: String!
        title: String!
        content: String!
    }

    input UpdateFoodSpecInput {
        id: ID!
        image: String
        title: String
        content: String
    }

    input DeleteFoodSpecInput {
        id: ID!
    }


    extend type Query {
        foodSpecs: [FoodSpec!]
    }

    extend type Mutation {
        createFoodSpec(input: CreateFoodSpecInput!): FoodSpec!
        updateFoodSpec(input: UpdateFoodSpecInput!): FoodSpec!
        deleteFoodSpec(id: ID!): FoodSpec!
    }
`;

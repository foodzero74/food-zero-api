// types/index.ts

// Define the CreateCategoryInput type
export type CreateCategoryInput = {
    name: String;
    description: String; // Optional description
    image: String;       // Optional image URL
};

// Define the User type based on the Firebase token structure
export type User = {
    uid: string;
};

// Define the GraphQL context type
export type GraphQLContext = {
    user?: User; // User might be undefined if not authenticated
};

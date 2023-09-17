import { Request } from 'express';

export enum ErrorType {
    UPDATE_CATEGORY = 'You must be logged in to update a category.',
    CREATE_CATEGORY = 'You must be logged in to create a category.',
    CREATE_PRODUCT = 'You must be logged in to create a product.',
    UPDATE_PRODUCT = 'You must be logged in to update a product.',
    DELETE_SCHEDULE = 'You must be logged in to delete an schedule.',
    CREATE_SCHEDULE = 'You must be logged in to create an schedule.',
    UPDATE_SCHEDULE = 'You must be logged in to update an schedule.',
    NOT_FOUND_CATEGORY = 'Category not found.',
    NOT_FOUND_PRODUCT = 'Product not found.',
    NOT_FOUND_SCHEDULE = 'Schedule not found.',
    INVALID_TOKEN = 'Invalid token.',
    OVERLAP_SCHEDULE = 'Schedule overlaps with an existing schedule.',
}

export type CreateCategoryInput = {
    name: String;
    description: String;
    image: String;
};

export interface CreateScheduleInput {
    name: string;
    openTime: string;
    closeTime: string;
}

export interface UpdateScheduleInput {
    id: string;
    name?: string;
    openTime?: string;
    closeTime?: string;
}

export interface CreateProductInput {
    name: string;
    description?: string;
    price: number;
    image: string;
    priority: number;
    categories: string[];
}

export interface UpdateCategoryInput {
    id: string;
    name?: string;
    description?: string;
    image?: string;
    disabled?: boolean;
}

export interface UpdateProductInput {
    id: string; 
    name?: string; 
    description?: string;
    price?: number;
    image?: string;
    priority?: number;
    categories?: string[]; 
    disabled?: boolean;
  }
  

export type User = {
    uid: string;
};

export type GraphQLContext = {
    req: Request;
    user?: User;
};


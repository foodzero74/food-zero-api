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
    NOT_FOUND_STAFF = 'Staff not found.',
    CREATE_STAFF = 'You must be logged in to create a staff member.',
    UPDATE_STAFF = 'You must be logged in to update a staff member.',
    DELETE_STAFF = 'You must be logged in to delete a staff member.',
    UNDELETE_STAFF = 'You must be logged in to activate a staff member.',
}

export interface CreateStaffInput {
    name: string;
    description: string;
    image: string;
    role: string;
    disabled?: boolean;
}

export interface UpdateStaffInput {
    id: string;
    name?: string;
    description?: string;
    image?: string;
    role?: string;
    disabled?: boolean;
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


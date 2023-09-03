import { ProductModel, CategoryModel } from '../models';
import { Request } from 'express';
import { Document } from 'mongoose';

export type CreateCategoryInput = {
    name: String;
    description: String;
    image: String;
};

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


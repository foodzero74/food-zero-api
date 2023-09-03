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
    categories: string[];  // Array of Category IDs
  }


export type User = {
    uid: string;
};

// Define the GraphQL context type
export type GraphQLContext = {
    req: Request;
    user?: User; // User might be undefined if not authenticated
};


type ProductDocument = Document & typeof ProductModel.prototype;
type CategoryDocument = Document & typeof CategoryModel.prototype;

export interface ProductType extends ProductDocument {}
export interface Category extends CategoryDocument {}
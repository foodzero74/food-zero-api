import {
  BlogResolver,
  CategoryResolver,
  CommentHomeResolver,
  CommentResolver,
  FoodSpecsResolver,
  MeatProcessResolver,
  ParamsResolver,
  ProductResolver,
  ScheduleResolver,
  StaffResolver
} from "./resolvers";
import {
  BlogTypeDef,
  CategoryTypeDef,
  CommentTypeDef,
  CommentsHomeTypeDef,
  FoodSpecsTypeDef,
  MeatProcessTypeDef,
  ParamTypeDef,
  ProductTypeDef,
  RootTypeDef,
  ScheduleTypeDef,
  StaffTypeDef
} from "./types";
import { makeExecutableSchema } from '@graphql-tools/schema';

const schema = makeExecutableSchema({
  typeDefs: [
    ProductTypeDef,
    CategoryTypeDef,
    ScheduleTypeDef,
    StaffTypeDef,
    RootTypeDef,
    FoodSpecsTypeDef,
    MeatProcessTypeDef,
    CommentTypeDef,
    BlogTypeDef,
    CommentsHomeTypeDef,
    ParamTypeDef
  ],
  resolvers: [
    ProductResolver, 
    CategoryResolver, 
    ScheduleResolver, 
    StaffResolver, 
    FoodSpecsResolver, 
    MeatProcessResolver, 
    BlogResolver, 
    CommentResolver,
    CommentHomeResolver,
    ParamsResolver
  ],
});

export default schema;

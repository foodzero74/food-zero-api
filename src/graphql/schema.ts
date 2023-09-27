import {
  BlogResolver,
  CategoryResolver,
  CommentHomeResolver,
  CommentResolver,
  ContactResolver,
  FoodSpecsResolver,
  MeatProcessResolver,
  ParamsResolver,
  ProductResolver,
  ReservationResolver,
  ScheduleResolver,
  StaffResolver
} from "./resolvers";
import {
  BlogTypeDef,
  CategoryTypeDef,
  CommentTypeDef,
  CommentsHomeTypeDef,
  ContactsTypeDef,
  FoodSpecsTypeDef,
  MeatProcessTypeDef,
  ParamTypeDef,
  ProductTypeDef,
  ReservationsTypeDef,
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
    ParamTypeDef,
    ContactsTypeDef,
    ReservationsTypeDef
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
    ParamsResolver,
    ContactResolver,
    ReservationResolver
  ],
});

export default schema;

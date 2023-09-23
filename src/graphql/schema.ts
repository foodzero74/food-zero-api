import {
  CategoryResolver,
  FoodSpecsResolver,
  MeatProcessResolver,
  ProductResolver,
  ScheduleResolver,
  StaffResolver
} from "./resolvers";
import {
  CategoryTypeDef,
  FoodSpecsTypeDef,
  MeatProcessTypeDef,
  ProductTypeDef,
  RootTypeDef,
  ScheduleTypeDef,
  StaffTypeDef
} from "./types";
import { makeExecutableSchema } from '@graphql-tools/schema';

const schema = makeExecutableSchema({
  typeDefs: [ProductTypeDef, CategoryTypeDef, ScheduleTypeDef, StaffTypeDef, RootTypeDef, FoodSpecsTypeDef, MeatProcessTypeDef],
  resolvers: [ProductResolver, CategoryResolver, ScheduleResolver, StaffResolver, FoodSpecsResolver, MeatProcessResolver],
});

export default schema;

import { CategoryResolver, FoodSpecsResolver, ProductResolver, ScheduleResolver, StaffResolver } from "./resolvers";
import { CategoryTypeDef, FoodSpecsTypeDef, ProductTypeDef, RootTypeDef, ScheduleTypeDef, StaffTypeDef } from "./types";
import { makeExecutableSchema } from '@graphql-tools/schema';

const schema = makeExecutableSchema({
  typeDefs: [ProductTypeDef, CategoryTypeDef, ScheduleTypeDef, StaffTypeDef, RootTypeDef, FoodSpecsTypeDef],
  resolvers: [ProductResolver, CategoryResolver, ScheduleResolver, StaffResolver, FoodSpecsResolver],
});

export default schema;

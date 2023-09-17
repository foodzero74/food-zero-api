import { makeExecutableSchema } from '@graphql-tools/schema';
import { ProductTypeDef } from './types/ProductTypeDef';
import { ProductResolver } from './resolvers/ProductResolver';
import { CategoryTypeDef } from './types/CategoryTypeDef';
import { CategoryResolver } from './resolvers/CategoryResolver';
import { ScheduleTypeDef } from './types/ScheduleTypeDef';
import { ScheduleResolver } from './resolvers/ScheduleResolver';
import { StaffTypeDef } from './types/StaffTypeDef';
import { StaffResolver } from './resolvers/StaffResolver';
import { RootTypeDef } from './types/rootTypeDef';

const schema = makeExecutableSchema({
  typeDefs: [ProductTypeDef, CategoryTypeDef, ScheduleTypeDef, StaffTypeDef, RootTypeDef],
  resolvers: [ProductResolver, CategoryResolver, ScheduleResolver, StaffResolver],
});

export default schema;

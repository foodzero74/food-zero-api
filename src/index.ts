import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';
import { connectToDb } from './config/database';
import getUserFromToken from './middleware/Authentication';
import {
  CategoryResolver,
  CategoryTypeDef,
  ProductResolver,
  ProductTypeDef,
  RootTypeDef,
  ScheduleResolver,
  ScheduleTypeDef
} from './graphql';

interface GraphqlContext {
  token?: String;
}
const app = express();
connectToDb();
const typeDefs = [RootTypeDef, ProductTypeDef, CategoryTypeDef, ScheduleTypeDef];
const resolvers = [ProductResolver, CategoryResolver, ScheduleResolver];

const server = new ApolloServer<GraphqlContext>({
  typeDefs,
  resolvers
});

const startApolloServer = async () => {
  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        const token = req.headers.authorization || '';
        const user = await getUserFromToken(token);
        return { user };
      },
    }),
  );
  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000/graphql`);
  });
}

startApolloServer();
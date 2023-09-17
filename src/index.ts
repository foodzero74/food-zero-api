import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';
import { connectToDb } from './config/database';
import getUserFromToken from './middleware/Authentication';
import schema from './graphql/schema';

interface GraphqlContext {
  token?: String;
}
const app = express();
connectToDb();

const server = new ApolloServer<GraphqlContext>({ schema });

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
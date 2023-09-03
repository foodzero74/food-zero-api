import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { connectToDb } from './config/database';
import { ProductTypeDef } from './graphql/ProductTypeDef';
import getUserFromToken from './middleware/Authentication';
import { ProductResolver } from './graphql/ProductResolver';
import { RootTypeDef } from './graphql/rootTypeDef';

const app = express();
connectToDb();
const typeDefs = [RootTypeDef, ProductTypeDef];
const resolvers = [ProductResolver];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || '';
    const user = await getUserFromToken(token);
    return { user };
  }
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startApolloServer();
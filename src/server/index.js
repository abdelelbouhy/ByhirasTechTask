import express from 'express';
import path from 'path';
import { ApolloServer, gql } from 'apollo-server-express';
import { mergeTypes } from 'merge-graphql-schemas';
import Users from './data/users';
import Addresses from './data/address';
import userSchema from './schema/user';
import addressSchema from './schema/address';
const app = express();

const resolvers = {
  Query: {
    users: () => Users,
  },
};


const server = new ApolloServer({ typeDefs: userSchema, resolvers, playground: true });
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () => console.log('port 30000'))
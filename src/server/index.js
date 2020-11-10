import express from 'express';
import path from 'path';
import { ApolloServer, gql } from 'apollo-server';
import { mergeTypes } from 'merge-graphql-schemas';
import Users from './data/users';
import Addresses from './data/address';
import userSchema from './schema/user';
import addressSchema from './schema/address';
const app = express();

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    users: () => Users,
  },
};


const server = new ApolloServer({ typeDefs: userSchema, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
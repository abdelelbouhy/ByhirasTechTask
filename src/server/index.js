import express from 'express';
import path from 'path';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import { merge } from "lodash";
import * as childProcess from 'child_process';
import { ApolloServer, gql } from 'apollo-server-express';
import { mergeTypes } from 'merge-graphql-schemas';
import importAllFrom from 'import-all-from';
import users from './data/users';
import Addresses from './data/address';
import userSchema from './schema/user';
import addressSchema from './schema/address';
const app = express();

const uerResolver = {
  Query: {
    users: () => users,
    user(parent, args, context, info) {
      return {
        ...users.find(user => user.name === args.name), 
        address: {line1: Addresses.find(address => address.name === args.name).address
        }
      };
    }
  },

  Mutation: {
    addUser: (parent, {name, age}) => {
      users.push({name, age});
      return {name, age}
    }
  }
};

const addressResolver = {
  Query: {
    users: () => Addresses,
  },
};

const resolvers = merge({}, uerResolver, addressResolver);

// const schemas = importAllFrom(path.join(__dirname, '/schema'));

// console.log(schemas)


const schema = mergeTypes([userSchema, addressSchema], { all: true });


const server = new ApolloServer({ typeDefs: schema, resolvers, playground: true });
server.applyMiddleware({ app });


app
    .set('view engine', 'html')
    .engine('html', ejs.renderFile)
    .set('views', path.resolve(__dirname, '../views'))
    .use('/dist', express.static(path.resolve(__dirname, '../../dist/')))
    .listen(3000, () => {
        const command = /linux|darwin/.test(process.platform) ? 'open' : process.platform === 'win32' ? 'start' : '';

        if (command) {
            childProcess.exec(`${command} -a "Google Chrome" http://localhost:3000`, () => {

            });

            console.log('http://localhost:3000');
        } else {
            console.log('http://localhost:3000');
        }
    });

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/*', (req, res) => {
    res.render('index');
});

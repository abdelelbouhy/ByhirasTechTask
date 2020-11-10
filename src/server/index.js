import express from 'express';
import path from 'path';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import * as childProcess from 'child_process';
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

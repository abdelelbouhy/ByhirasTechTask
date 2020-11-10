import {gql} from 'apollo-server';

export default gql`
    type User {
        name: String
        age: Int
        address: Address
    }

    type Query {
        users: [User]
        user(name: String): User
    }

    type Mutation {
        addUser(name: String, age: Int): User
    }
`;
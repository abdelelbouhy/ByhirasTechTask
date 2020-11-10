import {gql} from 'apollo-server';

export default gql`
    type Address {
        name: String!
        line1: String!
        user: User
    }

    type Query {
        addresses: [Address]
    }
`;
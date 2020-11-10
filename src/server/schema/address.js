import {gql} from 'apollo-server';

export default gql`
    type Adress {
        name: String!
        address: String!
    }

    type Query {
        addresses: [Address]
    }
`;
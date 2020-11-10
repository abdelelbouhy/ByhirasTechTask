import {gql} from 'apollo-server';

export default gql`
    type User {
        name: String
        age: Int
    }

    type Query {
        users: [User]
    }
`;

// export default gql`
//     type User {
//         title: String
//         author: String
//     }

//     type Query {
//         users: [User]
//     }
// `;
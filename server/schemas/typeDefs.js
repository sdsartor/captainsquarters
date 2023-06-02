const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Captain {
    name: String

}

    type User {
        _id: ID
        username: String
        email: String
        password: String
        captains: [Captain]
    }


    type Auth {
        user: User
        token: ID
    }

    type Query {
        users: [User]
        user(username: String!): User
        captains(name: String): [Captain]
        captain(captainId: ID): Captain
        me: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        createCaptain(name: String!): Auth
    }
`;
// Credit to Dillon!!!!
module.exports = typeDefs;

// deleteCaptain(captainId: ID!): Captain
// updateCaptain(captainId: ID!): Captain
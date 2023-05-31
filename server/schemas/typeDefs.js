const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        captains: [Captain]
    }

    type Captain {
        name: String

    }

    type Auth {
        _id: ID
        user: User
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
deleteCaptain(name: String!): Auth
updateCaptain(name: String!): Auth
    }
`;
// Credit to Dillon!!!!
module.exports = typeDefs;

// deleteCaptain(captainId: ID!): Captain
// updateCaptain(captainId: ID!): Captain
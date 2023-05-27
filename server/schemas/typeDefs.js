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
        background: [Background]
        stats: Object
        powers: [Background]
        firstMate: [FirstMate]
        crewMembers: [CrewChoice]
    }

    type Auth {
        _id: ID
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        captains(name: String!): [Captain]
        captain(captainId: ID!): Captain
        me: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        createCaptain(name: String!, background: [Background], stats: Object, powers: [Background], firstMate: [FirstMate], crewMembers: [CrewChoice])
        deleteCaptain(captainId: ID!): Captain
        updateCaptain(captainId: ID!): Captain

    }
`;

module.exports = typeDefs;
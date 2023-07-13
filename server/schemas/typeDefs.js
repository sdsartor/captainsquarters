const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }
    
    input Captain {
        name: String!
        background: [Background]
        FirstMate: [FirstMate]
        crewMembers: [CrewChoice]
        createdBy: ID
    }
    
    input Background {
        name: String
        stats: String
        corePowers: ID
    }

    input FirstMate {
        name: String
        background: String
        stats: String
        powers: String
    }

    input CrewChoice {
        name: String
        stats: String
        gear: String
        soldierType: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        captains: ID
    }

    type Query {
        users: [User]
        user(username: String!): User
        captains(name: String): ID
        captain(captainId: ID): ID
        me: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        createCaptain(name: String!, background: Background, FirstMate: FirstMate, crewMembers: CrewChoice, createdBy: ID): ID
    }
`;

module.exports = typeDefs;
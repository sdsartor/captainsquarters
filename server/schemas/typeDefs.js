const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Auth {
        token: ID!
        user: User
    }
    
    input Captain {
        name: String!
        level: Int
        move: Int
        fight: Int
        shoot: Int
        armor: Int
        will: Int
        health: Int
        background: String
        corePowers: ID
        generalPowers: ID
    
    type User {
        _id: ID
        username: String
        email: String
        password: String
        captains: ID
    }

    type Query {
        users: ID
        user(username: String!): User
        captains(name: String): ID
        captain(captainId: ID): ID
        me: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        createCaptain(name: String!, level: Int, move: Int, fight: Int, shoot: Int, armor: Int, will: Int, health: Int, background: String, corePowers: ID, generalPowers: ID): ID
    }
`;

module.exports = typeDefs;
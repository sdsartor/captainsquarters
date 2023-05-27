import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_CAPTAIN = gql`
    mutation createCaptain($name: String!, $background: [Background], $stats: Object, $powers: [Powers], $firstMate: [FirstMate], $crewMembers: [CrewChoice]) {
        createCaptain(name: $name, background: $background, stats: $stats, powers: $powers, firstMate: $firstMate, crewMembers: $crewMembers) {
            _id
            name
            background
            stats
            powers
            firstMate
            crewMembers
        }
    }
`;

export const DELETE_CAPTAIN = gql`
    mutation deleteCaptain($captainId: ID!) {
        deleteCaptain(captainId: $ID) {
            _id
            name
            background
            stats
            powers
            firstMate
            crewMembers
        }
    }
`;

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
    mutation createCaptain($name: String, $move: Int, $shoot: Int, $armor: Int, $will: Int, $health: Int, $background: String, $corePowers: ID, $generalPowers: ID) {
        createCaptain(name: Input, level: Input, move: Input, fight: Input, shoot: Int, armor: Int, will: Input, health: Input, background: Input, corePowers: Input, generalPowers: Input) {
            _id
            name
            level
            move
            fight
            shoot
            armor
            will
            health
            background
            corePowers
            generalPowers
            user {
                _id
                captains
            }
        }
    }
`;


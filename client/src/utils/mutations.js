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
    mutation createCaptain($name: String!, $background: [Background], $firstMate: [FirstMate], $crewMembers: [CrewChoice], $createdBy: [User]) {
        createCaptain(name: $name, background: $background, firstMate: $firstMate, crewMembers: $crewMembers, createdBy: $createdBy) {
            _id
            name
            background
            firstMate
            crewMembers
            createdby
        }
    }
`;

// export const DELETE_CAPTAIN = gql`
//     mutation deleteCaptain($captainId: ID!) {
//         deleteCaptain(captainId: $ID) {
//             _id
//             name
//             background
//             firstMate
//             crewMembers
//         }
//     }
// `;


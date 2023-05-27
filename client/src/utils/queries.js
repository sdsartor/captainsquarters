import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            name
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            captains {
                _id
                name
            }
        }
    }
`;

export const QUERY_CAPTAINS = gql`
    query allCaptains {
        captains {
            _id
            name
        }
    }
`;

export const QUERY_SINGLE_CAPTAIN = gql`
    query oneCaptain($captainId: ID!) {
        captain(captainId: $captainId) {
            _id
            name
            background {
                name
                statMods
                corePowers
            }
            stats
            powers {
                name
            }
            firstMate {
                name
                background
            }
            crewMembers {
                name
                background
            }
        }
    }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      captains {
        _id
        name
      }
    }
  }
`;
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

export const QUERY_CAPTAINS = gql`
  query captains {
    captains {
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
    }
  }
`;

export const QUERY_CAPTAIN = gql`
  query captain {
    captain {
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
    }
  }
`;
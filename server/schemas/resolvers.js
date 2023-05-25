const { AuthenticationError } = require('apollo-server-express');
const { User, Captain } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError('Please log in before moving on')
        }
    },

    Mutation: {

        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
           },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError('No user found with that email, please try another.');
            }
            const pw = await user.isCorrectPassword(password);
            if (!pw) {
                throw AuthenticationError('The password or username is incorrect, please try again.');
            }
            const token = signToken(user);
            return {user, token };
        },

        createCaptain: async (parent, { })

    }
}
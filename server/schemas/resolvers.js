const { AuthenticationError } = require('apollo-server-express');
const { User, Captain, Background, FirstMate, CrewChoice } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('captains');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('captains');
        },
        captains: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Captain.find(params);
        },
        captain: async (parent, { captainId }) => {
            return Captain.findOne({ _id: captainId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError('Please log in before moving on')
        },
    },

    Mutation: {

        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
           },

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw AuthenticationError('No user found with that username, please try another.');
            }
            const pw = await user.isCorrectPassword(password);
            if (!pw) {
                throw AuthenticationError('The password or username is incorrect, please try again.');
            }
            const token = signToken(user);
            return { token, user };
        },

        createCaptain: async (parent, { Captain }, context) => {
           if (context.user) {
          return User.findOneAndUpdate(
            {
                $addToSet: { Captain: Captain },
            },
            {
                new: true,
                runValidators: true,
            }
          );

            // await User.findByIdAndUpdate(context.user.id, { $push: { Captain: Captain },
            // });

            // return captain;
           }
        },

    // deleteCaptain: async (parent, { captainId }, context) => {
    //     if (context.user) {
    //         const updatedUser = await User.findOneAndDelete({
    //             _id: captainId,
    //             $pull: context.user.username,
    //             new: true,
    //         });
    //         await User.findOneAndUpdate(
    //             { _id: context.user._id},
    //             { $pull: { captain: { captainId: captainId} }},
    //             { new: true }
    //         );
    //         return updatedUser;
    //     }
    // },
    // updateCaptain: async (parent, { captainId }, context ) => {
    //     if (context.user) {
    //     const captain = await Captain.findByIdAndUpdate(
    //         id,
    //         { new: true }
    //     );
    //     return captain;
    // }

    // }
    }
};

module.exports = resolvers;

// BELOW IS WHAT I STARTED FOR THE CREATE CAPTAIN RESOLVER

// createCaptain: async (parent, { Captain }, context) => {
//     if (context.user) {
//         const captain = await Captain.create({
//             name,
//             background,
//             firstMate,
//             crewMembers
//         });
//         await Background.findOne(
//             { _id: context.user._id },
//             { $addToSet: { background: background._id } }
//         )
//     }
// }
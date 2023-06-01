const { Schema, model } = require('mongoose');
const User  = require('./User');
const Background = require('./Background');
const FirstMate = require('./FirstMate');
const CrewChoice = require('./CrewChoice');

const captainSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    background: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Background'
        },
    ],
    firstMate: [
        {
            type: Schema.Types.ObjectId,
            ref: 'FirstMate'
        }
    ],
    crewMembers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CrewChoice'
        }
    ],
    createdBy: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Captain = model('Captain', captainSchema);

module.exports = Captain;
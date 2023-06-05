const { Schema, model } = require('mongoose');

const captainSchema = new Schema({
    name: {
        type: String,
    },
    level: {
        type: Number,
    },
    move: {
        type: Number,
    },
    fight: {
        type: Number,
    },
    shoot: {
        type: Number,
    },
    armor: {
        type: Number,
    },
    will: {
        type: Number,
    },
    health: {
        type: Number,
    },
    background: {
        type: String,
    },
    corePowers: {
        type: Array,
    },
    generalPowers: {
        type: Array,
    },

});

const Captain = model('Captain', captainSchema);

module.exports = Captain;
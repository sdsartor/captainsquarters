const { Schema, model } = require('mongoose');
import { Captain } from "./Captain";

const firstMateSchema = new Schema ({
    stats: {
        name: "",
        type: "First Mate",
        level: 0,
        move: 6,
        fight: 2,
        shoot: 2,
        armor: 9,
        will: 2,
        health: 14,
        gear: [],
        slots: 5,
        background: "",
    },
    captain: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Captain'
        },
    ],
})

const FirstMate = model('FirstMate', firstMateSchema);

module.exports = FirstMate;
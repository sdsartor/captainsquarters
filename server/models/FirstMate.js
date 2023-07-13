const { Schema, model } = require('mongoose');

const firstMateSchema =  new Schema({
        name: {
            type: String,
        },
        background: {
            type: String,
        },
        stats: {
            type: Object,
        },
        powers: {
            type: Array,
        },
    }
);    

const FirstMate = model('FirstMate', firstMateSchema);

module.exports = FirstMate;
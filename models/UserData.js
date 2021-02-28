const mongoose = require('mongoose');
const Interaction = require('./Interaction');

const UserDataSchema = mongoose.Schema({
    timeTotal: {
        type: Number,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    html: {
        type: String,
        required: true
    },
    screenSize: {
        type: {
            width: Number,
            height: Number
        },
        required: true
    },
    totalClicks : {
        type: Number,
        required: true
    },
    totalKeyStrokes: {
        type: Number,
        default: 0,
        required: true
    },
    mouseMovement: {
        type: [{
            x: Number,
            y: Number
        }],
        required: true
    },
    interactions: {
        type: [Interaction],
        required: false
    }

});

module.exports = mongoose.model('UserData', UserDataSchema);
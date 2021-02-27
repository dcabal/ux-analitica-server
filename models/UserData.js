const mongoose = require('mongoose');
const Coordinate = require('./Coordinate');
const Interaction = require('./Interaction');
const ScreenSize = require('./ScreenSize');


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
        type: ScreenSize,
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
        type: [Coordinate],
        required: true
    },
    interactions: {
        type: [Interaction],
        required: false
    }

});

module.exports = mongoose.model('UserData', UserDataSchema);
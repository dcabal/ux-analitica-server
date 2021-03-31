const mongoose = require('mongoose');
const Interaction = require('./Interaction').schema;

const UserDataSchema = mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    token: {
        type: String,
        required: true
    },
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
    mouseMovements: {
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
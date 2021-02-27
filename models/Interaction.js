const mongoose = require('mongoose');

const InteractionSchema = mongoose.Schema({
    dataUxa: {
        type: String,
        required: false
    },
    html: {
        type: String,
        required: true
    },
    mouseBefore: {
        type: Number,
        default: 0,
        required: false
    },
    tabsBefore: {
        type: Number,
        default: 0,
        required: false
    },
    clicksBefore: {
        type: Number,
        default: 0,
        required: false
    }
});

module.exports = mongoose.model('Interaction', InteractionSchema);
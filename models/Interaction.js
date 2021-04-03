const mongoose = require('mongoose');

const InteractionSchema = mongoose.Schema({
    trackedElement: {
        type: String,
        required: false
    },
    html: {
        type: String,
        required: true
    },
    mouseMovementBefore: {
        type: Number,
        default: 0,
        required: false
    },
    tabPressesBefore: {
        type: Number,
        default: 0,
        required: false
    }
});

module.exports = mongoose.model('Interaction', InteractionSchema);
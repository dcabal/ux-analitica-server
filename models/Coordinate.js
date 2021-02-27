const mongoose = require('mongoose');

const CoordinateSchema = mongoose.Schema({
    x: Number,
    y: Number
});

module.exports = mongoose.model('Coordinate', CoordinateSchema);
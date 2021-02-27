const mongoose = require('mongoose');

const ScreenSizeSchema = mongoose.Schema({
    width: Number,
    height: Number
});

module.exports = mongoose.model('ScreenSize', ScreenSizeSchema);
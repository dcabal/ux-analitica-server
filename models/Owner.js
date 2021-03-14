const mongoose = require('mongoose');

const OwnerSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    sites: [{
        token: String,
        host: String
    }]
});

module.exports = mongoose.model('Owner', OwnerSchema);
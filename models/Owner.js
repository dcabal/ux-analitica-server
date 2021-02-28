const mongoose = require('mongoose');

const OwnerSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    sites: [{
        token: String,
        host: String
    }]
});

module.exports = mongoose.model('Owner', OwnerSchema);
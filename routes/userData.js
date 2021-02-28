const express = require('express');
const router = express.Router();
const UserData = require('../models/UserData');

router.post('/', async (req, res) => {
    const userData = new UserData({...req.body});

    userData.save()
    .then(res => res.json(res))
    .catch(err => res.json(err));
});

module.exports = router;
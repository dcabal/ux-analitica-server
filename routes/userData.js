const express = require('express');
const router = express.Router();
const UserData = require('../models/UserData');

router.post('/', async (req, res) => {
    const userData = new UserData(req.body);
    userData.save()
    .then(result => res.json(result))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
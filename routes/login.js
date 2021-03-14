require('dotenv/config');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Owner = require('../models/Owner');


router.post('/', async (req, res) => {
    const { userName, password } = req.body;
    const user = await Owner.findOne({ userName }).lean();

    if (!user)
        return res.status(404).json({ status: 'Not found' });

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, process.env.SCR)
        return res.json({ status: 'ok', data: token });
    }

    res.status(404).json({ status: 'Not found' });
});

module.exports = router;
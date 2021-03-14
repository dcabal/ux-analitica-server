const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Owner = require('../models/Owner');

router.post('/', async (req, res) => {
    const { userName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Owner({ userName, email, password: hashedPassword });
    
    await newUser.save()
    .then(result => res.json(result))
    .catch(error => res.json(error));
});

module.exports = router;
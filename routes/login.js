require('dotenv/config');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Owner = require('../models/Owner');


router.post('/', async (req, res) => {
    const { userName, password } = req.body;
    
    if ( !userName || !password)
        return res.sendStatus(400);

    const user = await Owner.findOne({ userName }).lean();

    if (!user){
        res.statusMessage = 'Usuario o contraseña incorrectos';
        return res.sendStatus(404);
    }

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, process.env.SCR)
        return res.json(
            { 
                status: 'ok', 
                data: { 
                    token , 
                    owner: {
                        userName: user.userName,
                        email: user.email,
                        sites: user.sites
                    }
                }
            }
        );
    }

    res.statusMessage = 'Usuario o contraseña incorrectos';
    return res.sendStatus(404);
});

module.exports = router;
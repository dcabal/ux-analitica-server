require('dotenv/config');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const Owner = require('../models/Owner');

router.get('/', (req, res) => {
    const token = req.headers.authorization?.split(' ').pop();

    jwt.verify(token, process.env.SCR, async (err, verified) => {
        if (err) {
            res.statusMessage = err.message;
            return res.sendStatus(401);
        }
       
        await Owner.findById(verified.id)
        .then(owner => {
            if(!owner) {
                res.statusMessage = 'Usuario no encontrado';
                return res.sendStatus(404);
            } else
                return res.json({
                    userName: owner.userName,
                    email: owner.email,
                    sites: owner.sites
                });
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    });
});

router.patch('/', async (req, res) => {
    const token = req.headers?.authorization.split(' ').pop();

    jwt.verify(token, process.env.SCR, async (err, verified) => {
        if (err) {
            res.statusMessage = err.message;
            return res.sendStatus(401);
        }
        const hashedPassword = req.body.password && await bcrypt.hash(req.body.password, 10);
        await Owner.findOneAndUpdate(
            { _id: verified.id }, 
            {
                ...(!!req.body.userName && { userName: req.body.userName }),
                ...(!!req.body.email && { email: req.body.email }),
                ...(!!hashedPassword && { password: hashedPassword})
            }, 
            { new: true }
        )
        .then(owner => {
            if(!owner) 
                return res.sendStatus(404);
            else
                return res.json({
                    userName: owner.userName,
                    email: owner.email,
                    sites: owner.sites
                });
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    });
});

module.exports = router;
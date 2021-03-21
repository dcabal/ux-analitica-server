require('dotenv/config');
const express = require('express');
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const router = express.Router();
const Owner = require('../models/Owner');

router.get('/', async (req, res) => {
    await Owner.findOne({'sites.token': req.query.token, 'sites.host': req.query.host})
    .then(owner => {
        if(!owner) {
            res.statusMessage = 'Sitio no encontrado';
            return res.sendStatus(404);
        } else
            return res.sendStatus(200);
    })
    .catch(err => {
        return res.status(500).json(err);
    });
});

router.patch('/', async (req, res) => {
    const token = req.headers?.authorization.split(' ').pop();

    jwt.verify(token, process.env.SCR, async (err, verified) => {
        if (err) {
            res.statusMessage = err.message;
            return res.sendStatus(401);
        }
        
        await Owner.findOneAndUpdate(
            { _id: verified.id }, 
            { 
                $push: { 
                    sites: {
                        host: req.body.host,
                        token: uuid()
                    }
                }
            }, 
            { new: true })
        .then(owner => {
            if(!owner) 
                return res.sendStatus(404);
            else
                return res.json({
                    sites: owner.sites
                });
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    });
})

module.exports = router;
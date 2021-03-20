const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');

router.get('/', async (req, res) => {
    await Owner.findOne({'sites.token': req.query.token, 'sites.host': req.query.host})
    .then(owner => {
        if(!owner)
            res.status(404).json({message: 'Usuario no encontrado'});
        else
            res.json(owner);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;
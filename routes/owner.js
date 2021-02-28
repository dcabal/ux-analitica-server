const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');

router.get('/', (req, res) => {
    Owner.findOne({'sites.token': req.query.token, 'sites.host': req.query.host})
    .then(owner => {
        if(!owner)
            res.status(404).json({status: 'Not found'});
        else
            res.json(owner);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;
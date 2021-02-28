const express = require('express');
const router = express.Router();
const Owner = require('../models/Owner');

router.get('/', async (req, res) => {
    try {
        const owner = await Owner.findOne({'sites.token': 'req.query.token', 'sites.host': req.query.host});
        if(!owner)
            res.status(404).json({status: 'Not Found'});
        else
            res.json(owner);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;
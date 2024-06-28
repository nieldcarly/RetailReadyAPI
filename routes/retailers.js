const express = require('express');
const router = express.Router();
const Retailer = require('../models/retailer');

// Get all retailers
router.get('/', async (req, res) => {
    const retailers = await Retailer.findAll();
    res.json(retailers);
});

// Get retailer by ID
router.get('/:id', async (req, res) => {
    const retailer = await Retailer.findByPk(req.params.id);
    if (retailer) {
        res.json(retailer);
    } else {
        res.status(404).send('Retailer not found');
    }
});

// Create a new retailer
router.post('/', async (req, res) => {
    const newRetailer = await Retailer.create(req.body);
    res.status(201).json(newRetailer);
});

// Update a retailer
router.put('/:id', async (req, res) => {
    const retailer = await Retailer.findByPk(req.params.id);
    if (retailer) {
        await retailer.update(req.body);
        res.json(retailer);
    } else {
        res.status(404).send('Retailer not found');
    }
});

// Delete a retailer
router.delete('/:id', async (req, res) => {
    const retailer = await Retailer.findByPk(req.params.id);
    if (retailer) {
        await retailer.destroy();
        res.send('Retailer deleted');
    } else {
        res.status(404).send('Retailer not found');
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Brand = require('../models/brand');

// TODO: authentication
// Get all brands
router.get('/', async (req, res) => {
    const brands = await Brand.findAll();
    res.json(brands);
});

// Get brand by brand ID
router.get('/:id', async (req, res) => {
    const brand = await Brand.findByPk(req.params.id);
    if (brand) {
        res.json(brand);
    } else {
        res.status(404).send('Brand not found');
    }
});

// Create a new brand
router.post('/', async (req, res) => {
    const newBrand = await Brand.create(req.body);
    res.status(201).json(newBrand);
});

// Update a brand
router.put('/:id', async (req, res) => {
    const brand = await Brand.findByPk(req.params.id);
    if (brand) {
        await brand.update(req.body);
        res.json(brand);
    } else {
        res.status(404).send('Brand not found');
    }
});

// Delete a brand
router.delete('/:id', async (req, res) => {
    const brand = await Brand.findByPk(req.params.id);
    if (brand) {
        await brand.destroy();
        res.send('Brand deleted');
    } else {
        res.status(404).send('Brand not found');
    }
});

module.exports = router;

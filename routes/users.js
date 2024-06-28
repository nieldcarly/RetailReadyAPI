const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get all users
router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

// Get user by ID
router.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Create a new user
router.post('/', async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
});

// Update a user
router.put('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Delete a user
router.delete('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.send('User deleted');
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = router;

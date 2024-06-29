const express = require('express');
const router = express.Router();
const RoutingGuide = require('../models/routing-guide');

/*
* When the application is being used at scale these endpoints will allow a brand to upload their routing guide (via the
* admin portal in the browser application).
*
* The post request will upload the routing guide to S3, and a request will also be sent to GPT4 to parse the product
* items and packing steps from the routing guide (Note: for the sake of this exercise we are assuming that GPT4 will do
* this properly, but in a real-world scenario we'd likely need to implement a QA flow for the GPT4 response). Then the
* product items and steps will be parsed from the GPT response and written to the DB.
*
* The entire routing guide pdf can be retrieved via a GET request for additional information in the app or browser.
* */

// Get routing guide by ID
router.get('/:id', async (req, res) => {
    // TODO: handle retrieving pdf from S3
    const routingGuide = await RoutingGuide.findByPk(req.params.id);
    if (routingGuide) {
        res.json(routingGuide);
    } else {
        res.status(404).send('Routing guide not found');
    }
});

// Create a routing guide
router.post('/', async (req, res) => {
    // TODO: handle receiving pdf from request and writing to S3
    const newRoutingGuide = await RoutingGuide.create(req.body);
    res.status(201).json(newRoutingGuide);
});

// Delete a routing guide
router.delete('/:id', async (req, res) => {
    // TODO: handle deleting pdf in S3
    const routingGuide = await RoutingGuide.findByPk(req.params.id);
    if (routingGuide) {
        await routingGuide.destroy();
        res.send('Routing guide deleted');
    } else {
        res.status(404).send('Routing guide not found');
    }
});

module.exports = router;

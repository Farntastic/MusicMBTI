const express = require('express');
const Artist = require('../models/artist.model'); // Update the path as needed
const router = express.Router();

// Route for retrieving all artists
router.route('/all')
    .get(async (req, res) => {
        try {
            const artists = await Artist.find(); // Retrieve all artists
            res.status(200).json(artists); // Send data back
        } catch (error) {
            console.error('Error retrieving artists:', error);
            res.status(500).json({ message: 'Error retrieving data' });
        }
    });

// Route for retrieving an artist by ID
router.route('/number/:id')
    .get(async (req, res) => {
        try {
            const artist = await Artist.findOne({ id: parseInt(req.params.id) }); // Find artist by id
            if (!artist) {
                return res.status(404).json({ message: 'Artist not found' });
            }
            res.status(200).json(artist); // Send data back
        } catch (error) {
            console.error('Error retrieving artist:', error);
            res.status(500).json({ message: 'Error retrieving data' });
        }
    });

module.exports = router;

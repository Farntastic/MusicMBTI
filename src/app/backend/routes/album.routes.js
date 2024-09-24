const express = require('express');
const Album = require('../models/album.model'); // Update the path as needed
const router = express.Router();

// Route for retrieving all albums
router.route('/all')
    .get(async (req, res) => {
        try {
            const albums = await Album.find().populate('artist_id'); // Retrieve all albums with artist info
            res.status(200).json(albums); // Send data back
        } catch (error) {
            console.error('Error retrieving albums:', error);
            res.status(500).json({ message: 'Error retrieving data' });
        }
    });

// Route for retrieving an album by ID
router.route('/number/:id')
    .get(async (req, res) => {
        try {
            const album = await Album.findOne({ id: parseInt(req.params.id) }).populate('artist_id'); // Find album by id
            if (!album) {
                return res.status(404).json({ message: 'Album not found' });
            }
            res.status(200).json(album); // Send data back
        } catch (error) {
            console.error('Error retrieving album:', error);
            res.status(500).json({ message: 'Error retrieving data' });
        }
    });

module.exports = router;

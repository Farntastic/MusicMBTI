const expressFunction = require('express');
const mongoose = require('mongoose');
const Playlist = require('../models/Playlist'); // Update the path as needed

const router = expressFunction.Router();

// Route for getting all playlists
router.route('/all')
    .get(async (req, res) => {
        try {
            const playlists = await Playlist.find();
            res.status(200).json(playlists); // Send data back
        } catch (error) {
            console.error('Error retrieving playlists:', error);
            res.status(500).json({ message: 'Error retrieving data' });
        }
    });

// Route for getting a playlist by its number ID
router.route('/number/:id')
    .get(async (req, res) => {
        try {
            const playlistId = parseInt(req.params.id);

            // Check if ID is a valid number
            if (isNaN(playlistId)) {
                return res.status(400).json({ message: 'Invalid ID format' });
            }

            const playlist = await Playlist.findOne({ id: playlistId });

            if (!playlist) {
                return res.status(404).json({ message: 'Playlist not found' });
            }

            res.status(200).json(playlist);
        } catch (error) {
            console.error('Error retrieving Playlist by number ID:', error);
            res.status(500).json({ message: 'Error retrieving playlist' });
        }
    });

module.exports = router;

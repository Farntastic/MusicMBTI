const express = require('express');
const Album = require('../models/album.model'); // Update the path as needed
const router = express.Router();

// Route for retrieving all albums
router.route('/all')
    .get(async (req, res) => {
        try {
            const albums = await Album.find()
            res.status(200).json(albums); // Send data back
        } catch (error) {
            console.error('Error retrieving albums:', error);
            res.status(500).json({ message: 'Error retrieving data' });
        }
    });


// Route for retrieving albums by artist's number ID
router.route('/artist/:artistId')
    .get(async (req, res) => {
        try {
            const artistId = parseInt(req.params.artistId); // Get the artist's number ID from the URL
            const albums = await Album.find({ artist_id: artistId }); // Query albums by artist's number ID

            if (!albums || albums.length === 0) {
                return res.status(404).json({ message: 'Albums for this artist not found' });
            }

            res.status(200).json(albums); // Send the albums back
        } catch (error) {
            console.error('Error retrieving albums:', error);
            res.status(500).json({ message: 'Error retrieving albums' });
        }
    });

    // Route for retrieving albums by artist's ID
router.route('/artist/:artistId')
.get(async (req, res) => {
  try {
    const artistId = req.params.artistId; // Artist ID should be a string or number, depending on your database
    const albums = await Album.find({ artist_id: artistId }); // Query albums by artist's ID
    if (!albums || albums.length === 0) {
      return res.status(404).json({ message: 'Albums for this artist not found' });
    }
    res.status(200).json(albums);
  } catch (error) {
    console.error('Error retrieving albums:', error);
    res.status(500).json({ message: 'Error retrieving albums' });
  }
});
module.exports = router;

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

    router.get('/id/:artistId', async (req, res) => {
      try {
        const artistId = parseInt(req.params.artistId); // แปลงค่าเป็นตัวเลข
    
        if (isNaN(artistId)) {
          return res.status(400).json({ message: 'Invalid artist ID' });
        }
    
        const artist = await Artist.findOne({ id: artistId });
        if (!artist) {
          return res.status(404).json({ message: 'Artist not found' });
        }
    
        res.status(200).json(artist);
      } catch (error) {
        console.error('Error retrieving artist:', error);
        res.status(500).json({ message: 'Error retrieving data' });
      }
    });
    
    
module.exports = router;

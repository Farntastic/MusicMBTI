const expressFunction = require('express');
const mongoose = require('mongoose');
const Music = require('../models/Music');

const router = expressFunction.Router();

// Route ดึงเพลงทั้งหมด
router.route('/all')
    .get(async (req, res) => {
        try {
            const musicData = await Music.find()
                .populate('mbtiId') // Populate MBTI ที่เกี่ยวข้อง
                .populate('musictypeId') // Populate MusicType ที่เกี่ยวข้อง
                .populate('mbtiPlaylists') // Populate MBTIPlaylist ที่เกี่ยวข้อง
                .populate('musicTypePlaylists'); // Populate MusicTypePlaylist ที่เกี่ยวข้อง
            res.status(200).json(musicData);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving Music' });
        }
    });

// Route สำหรับดึงข้อมูล MBTIPlaylist ตาม ID
router.route('/number/:id')
    .get(async (req, res) => {
        try {
            const musicData = await Music.findOne({ id: parseInt(req.params.id)})
                .populate('mbtiId')
                .populate('musictypeId') 
                .populate('mbtiPlaylists') 
                .populate('musicTypePlaylists'); 

            if (!musicData) {
                return res.status(404).json({ message: 'music not found' });
            }

            res.status(200).json(musicData);
        } catch (error) {
            console.error('Error retrieving music:', error);
            res.status(500).json({ message: 'Error retrieving music' });
        }
    });

module.exports = router;
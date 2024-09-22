const expressFunction = require('express');
const mongoose = require('mongoose');
const Music = require('../models/Music'); // Import โมเดล Music

const router = expressFunction.Router();

// Route ดึงเพลงทั้งหมดพร้อมกับ MBTI, MusicType, และ Playlist ที่เกี่ยวข้อง
router.get('/all', async (req, res) => {
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
                .populate('mbtiId') // Populate MBTI ที่เกี่ยวข้อง
                .populate('musictypeId') // Populate MusicType ที่เกี่ยวข้อง
                .populate('mbtiPlaylists') // Populate MBTIPlaylist ที่เกี่ยวข้อง
                .populate('musicTypePlaylists'); // Populate MusicTypePlaylist ที่เกี่ยวข้อง

            if (!musicData) {
                return res.status(404).json({ message: 'MBTI Playlist not found' });
            }

            res.status(200).json(musicData);
        } catch (error) {
            console.error('Error retrieving MBTI Playlist:', error);
            res.status(500).json({ message: 'Error retrieving MBTI Playlist' });
        }
    });

module.exports = router;
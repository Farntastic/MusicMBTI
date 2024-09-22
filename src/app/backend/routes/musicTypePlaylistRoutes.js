const expressFunction = require('express');
const mongoose = require('mongoose');
const MusicTypePlaylist = require('../models/MusicTypePlaylist'); // Import โมเดล MBTIPlaylist

const router = expressFunction.Router();

// Route สำหรับดึงข้อมูล MBTIPlaylist ทั้งหมด
router.route('/all')
    .get(async (req, res) => {
        try {
            const musictypeplaylist = await MusicTypePlaylist.find()
                .populate('musicTypeId') // Populate musictype ที่เกี่ยวข้อง
                .populate('music'); // Populate รายการเพลงที่เกี่ยวข้อง
            res.status(200).json(musictypeplaylist); // ส่งข้อมูลกลับ
        } catch (error) {
            console.error('Error retrieving music type Playlist:', error);
            res.status(500).json({ message: 'Error retrieving music type playlist' });
        }
    });

// Route สำหรับดึงข้อมูล MBTIPlaylist ตาม ID
router.route('/number/:id')
    .get(async (req, res) => {
        try {
            const musictypeplaylist = await MusicTypePlaylist.findOne({ id: parseInt(req.params.id)})
                .populate('musicTypeId') // Populate MBTI ที่เกี่ยวข้อง
                .populate('music'); // Populate รายการเพลงที่เกี่ยวข้อง

            if (!musictypeplaylist) {
                return res.status(404).json({ message: 'music type Playlist not found' });
            }

            res.status(200).json(musictypeplaylist);
        } catch (error) {
            console.error('Error retrieving MBTI Playlist:', error);
            res.status(500).json({ message: 'Error retrieving music type Playlist' });
        }
    });

module.exports = router;

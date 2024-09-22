const expressFunction = require('express');
const mongoose = require('mongoose');
const MBTIPlaylist = require('../models/MBTIPlaylist');
const MBTI = require('../models/MBTI'); // Import โมเดล MBTI
const Music = require('../models/Music'); // Import โมเดล Music

const router = expressFunction.Router();

// Route สำหรับดึงข้อมูล MBTIPlaylist ทั้งหมด
router.route('/all')
    .get(async (req, res) => {
        try {
            const mbtiPlaylists = await MBTIPlaylist.find()
                .populate('mbtiId') // Populate MBTI ที่เกี่ยวข้อง
                .populate('music'); // Populate รายการเพลงที่เกี่ยวข้อง
            res.status(200).json(mbtiPlaylists); // ส่งข้อมูลกลับ
        } catch (error) {
            console.error('Error retrieving MBTIPlaylists:', error);
            res.status(500).json({ message: 'Error retrieving MBTIPlaylists' });
        }
    });

// Route สำหรับดึงข้อมูล MBTIPlaylist ตาม ID
router.route('/number/:id')
    .get(async (req, res) => {
        try {
            const mbtiPlaylist = await MBTIPlaylist.findOne({ id: parseInt(req.params.id)})
                .populate('mbtiId') // Populate MBTI ที่เกี่ยวข้อง
                .populate('music'); // Populate รายการเพลงที่เกี่ยวข้อง

            if (!mbtiPlaylist) {
                return res.status(404).json({ message: 'MBTI Playlist not found' });
            }

            res.status(200).json(mbtiPlaylist);
        } catch (error) {
            console.error('Error retrieving MBTI Playlist:', error);
            res.status(500).json({ message: 'Error retrieving MBTI Playlist' });
        }
    });

module.exports = router;

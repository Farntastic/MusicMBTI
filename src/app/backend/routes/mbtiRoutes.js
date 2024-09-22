const expressFunction = require('express');
const mongoose = require('mongoose');
const MBTI = require('../models/MBTI');

const router = expressFunction.Router();

// Route สำหรับดึง MBTI ทั้งหมด
router.route('/all')
    .get(async (req, res) => {
        try {
            const mbtiData = await MBTI.find(); // ดึงข้อมูล MBTI ทั้งหมด
            res.status(200).json(mbtiData); // ส่งข้อมูลกลับ
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving data' });
        }
    });

// Route สำหรับดึง MBTI ตาม ID
router.route('/number/:id')
    .get(async (req, res) => {
        try {
            const mbtiData = await MBTI.findOne({ id: parseInt(req.params.id) }); // ใช้ findOne เพื่อค้นหาตาม id
            if (!mbtiData) {
                return res.status(404).json({ message: 'MBTI not found' });
            }
            res.status(200).json(mbtiData); // ส่งข้อมูลกลับ
        } catch (error) {
            console.error('Error retrieving data:', error);
            res.status(500).json({ message: 'Error retrieving data' });
        }
    });

module.exports = router;

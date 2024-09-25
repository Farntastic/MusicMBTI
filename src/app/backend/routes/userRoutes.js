const express = require('express');
const User = require('../models/User'); // นำเข้าโมเดล User
const router = express.Router();

// สร้างผู้ใช้ใหม่
router.post('/addUser', async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ดึงข้อมูลผู้ใช้ทั้งหมด
router.get('/getall', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ดึงข้อมูลผู้ใช้ตาม ID
router.get('/get/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// อัปเดตข้อมูลผู้ใช้
router.put('/update/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).send('User not found');
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ลบผู้ใช้
router.delete('/deleteByid/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).send('User not found');
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router; // ส่งออก router
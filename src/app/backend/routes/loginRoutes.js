// routes/loginRoutes.js
const express = require('express');
const Login = require('../models/Login'); // นำเข้าโมเดล Login
const bcrypt = require('bcryptjs'); // ใช้ bcryptjs
const jwt = require('jsonwebtoken');

const router = express.Router();

// ลงทะเบียนผู้ใช้ใหม่
router.post('/register', async (req, res) => {
    const { id, username, email, password } = req.body;

    // ตรวจสอบว่าผู้ใช้มีอยู่แล้วหรือไม่
    const existingUser = await Login.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
    }

    try {
        // เข้ารหัสรหัสผ่านก่อนบันทึกลงฐานข้อมูล
        const hashedPassword = await bcrypt.hash(password, 10); // ใช้ 10 เป็น salt rounds
        const newUser = new Login({ id, username, email, passwordHash: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err); // แสดงข้อผิดพลาดใน console
        res.status(500).json({ message: 'Server error' });
    }
});

// เข้าสู่ระบบผู้ใช้
router.post('/', async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    try {
        const user = await Login.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // ตรวจสอบรหัสผ่าน
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        // สร้าง JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error(err); // แสดงข้อผิดพลาดใน console
        res.status(500).json({ message: 'Server error' });
    }
});

// ฟังก์ชันตรวจสอบสิทธิ์ด้วย JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// ตัวอย่างการใช้งาน middleware ใน route ที่ต้องการความปลอดภัย
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', userId: req.user.id });
});

module.exports = router; // ส่งออก router
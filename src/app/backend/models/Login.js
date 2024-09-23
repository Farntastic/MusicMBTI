// models/Login.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true, // ทำให้ id เป็นเอกลักษณ์
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    }
}, {
    collection: 'login'
});

// เมธอดสำหรับเข้ารหัสรหัสผ่านก่อนที่จะบันทึกลงฐานข้อมูล
LoginSchema.pre('save', async function (next) {
    if (!this.isModified('passwordHash')) return next();
    this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
    next();
});

let Login;
try {
    Login = mongoose.model('login');
} catch (error) {
    if (error.name === 'MissingSchemaError') {
        mbti = mongoose.model('login', LoginSchema);
    } else {
        throw error;
    }
}
module.exports = mongoose.model('login', LoginSchema);
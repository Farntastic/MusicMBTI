const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // นำเข้า cors
const expressApp = express();

const url = 'mongodb://localhost:27017/MusicMBTI';
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// ใช้ CORS middleware
expressApp.use(cors({
    origin: 'http://localhost:4200', // อนุญาตให้เข้าถึงจากโดเมนนี้
    methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // วิธีที่อนุญาต
    allowedHeaders: ['Content-Type', 'Authorization'] // Headers ที่อนุญาต
}));

expressApp.use(express.json()); // ใช้ express.json() เพื่อ parse JSON body

// เชื่อมต่อกับ MongoDB
mongoose.connect(url, config)
    .then(() => {
        console.log('Connected to MongoDB...');
        expressApp.listen(3000, () => {
            console.log('Listening on port 3000');
        });
    })
    .catch(err => {
        console.error('Cannot connect to MongoDB:', err);
        process.exit(1); // ออกจากโปรแกรมหากไม่สามารถเชื่อมต่อกับ MongoDB ได้
    });

// Routes
expressApp.use('/mbti', require('./routes/mbtiRoutes'));
expressApp.use('/mbtiPlaylist', require('./routes/mbtiPlaylistRoutes'));
expressApp.use('/music', require('./routes/musicRoutes'));
expressApp.use('/musicTypePlaylist', require('./routes/musicTypePlaylistRoutes'));
expressApp.use('/musicType', require('./routes/musicTypeRoutes'));
expressApp.use('/user', require('./routes/userRoutes'));
expressApp.use('/login', require('./routes/loginRoutes'));
expressApp.use('/artist', require('./routes/artist.routes'));
expressApp.use('/album', require('./routes/album.routes'));

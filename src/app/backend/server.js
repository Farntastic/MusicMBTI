
const expressFunction = require('express');
const mongoose = require('mongoose');
var expressApp = expressFunction();

const url = 'mongodb://localhost:27017/MusicMBTI';
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
    return next()
});

expressApp.use(expressFunction.json());

expressApp.use((req, res, next) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connected to MongoDB...');
        next();
    })
    .catch(err=> {
        console.log('Cannot connect to MongoDB');
        res.status(501).send('Cannot connect to MongoDB')
    });
});

// Routes
expressApp.use('/mbti',  require('./routes/mbtiRoutes'))
expressApp.use('/mbtiPlaylist',  require('./routes/mbtiPlaylistRoutes'))
expressApp.use('/music',  require('./routes/musicRoutes'))
expressApp.use('/musicTypePlaylist',  require('./routes/musicTypePlaylistRoutes'))
expressApp.use('/musicType',  require('./routes/musicTypeRoutes'))
expressApp.use('/playlist',  require('./routes/playlistRoutes'))
expressApp.use('/user', require('./routes/userRoutes'))
expressApp.use('/login', require('./routes/loginRoutes'))
expressApp.use('/artist', require('./routes/artist.routes'))
expressApp.use('/album' , require('./routes/album.routes'))


expressApp.listen(3000, function(){
    console.log('Listening on port 3000');
});

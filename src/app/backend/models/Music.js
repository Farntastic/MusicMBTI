const mongoose = require('mongoose');

var Schema = require('mongoose').Schema;

const musicSchema = new Schema({
    id: { type: Number, required: true },
    song_name: String,
    link: String,
     mbtiId: { type: mongoose.Schema.Types.ObjectId, ref: 'MBTI' }, // Many-to-one with MBTI
     musictypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'MusicType' }, // Many-to-one with MusicType
     mbtiPlaylists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MBTIPlaylist' }], // Many-to-many with MBTIPlaylist
     musicTypePlaylists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MusicTypePlaylist' }], // Many-to-many with MusicTypePlaylist
     album: {type: mongoose.Schema.Types.ObjectId, ref: 'album.model'}
 }, {
    collection: 'Music'
});

let music;
try {
    music = mongoose.model('Music');
} catch (error) {
    if (error.name === 'MissingSchemaError') {
        music = mongoose.model('Music', musicSchema); 
    } else {
        throw error;
    }
}

module.exports = music;
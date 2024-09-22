const mongoose = require('mongoose');

var Schema = require('mongoose').Schema;

const musicTypePlaylistSchema = new Schema({
    id: { type: Number, required: true },
    musicTypePlaylist_name: String,
    description: String,
    musicTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'MusicType' }, // Many-to-One
    music: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }], // Many-to-Many
}, {
    collection: 'MusicTypePlaylist'
});

let musictypeplaylist;
try {
    musictypeplaylist = mongoose.model('MusicTypePlaylist');
} catch (error) {
    if (error.name === 'MissingSchemaError') {
        musictypeplaylist = mongoose.model('MusicTypePlaylist', musicTypePlaylistSchema); 
    } else {
        throw error;
    }
}

module.exports = musictypeplaylist;
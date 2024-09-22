const mongoose = require('mongoose');

var Schema = require('mongoose').Schema;

const mbtiPlaylistSchema = new Schema({
    id: { type: Number, required: true },
    mbtiPlaylist_name: String,
    description: String,
    mbtiId: { type: mongoose.Schema.Types.ObjectId, ref: 'MBTI' }, // Many-to-One
    music: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Music' }], // Many-to-Many
}, {
    collection: 'MBTIPlaylist'
});

let mbtiplaylist;
try {
    mbtiplaylist = mongoose.model('MBTIPlaylist');
} catch (error) {
    if (error.name === 'MissingSchemaError') {
        mbtiplaylist = mongoose.model('MBTIPlaylist', mbtiPlaylistSchema); 
    } else {
        throw error;
    }
}

module.exports = mbtiplaylist;
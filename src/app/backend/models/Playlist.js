const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const playlistSchema = new Schema({
    id: { type: Number, required: true },
    playlist_name: { type: String },
}, {
    collection: 'Playlist'
});

// ตรวจสอบว่ามีโมเดลนี้อยู่แล้วหรือไม่
let playlist = mongoose.models.Playlist || mongoose.model('Playlist', playlistSchema);

module.exports = playlist;

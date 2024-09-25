const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  artist_id: {
    type: Number,
    required: true,
    ref: 'Artist' // เชื่อมโยงกับโมเดล Artist
  },
  title: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  coverImageURL: {
    type: String,
    required: true
  }
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;

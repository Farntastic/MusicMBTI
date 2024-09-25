const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  debutYear: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    required: true
  },
  photoURL: {
    type: String,
    required: true
  }
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;

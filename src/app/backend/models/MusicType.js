const mongoose = require('mongoose');

var Schema = require('mongoose').Schema;

const musicTypeSchema = new Schema({
    id: { type: Number, required: true },
    type: String,
}, {
    collection: 'MusicType'
});

let musictype;
try {
    musictype = mongoose.model('MusicType');
} catch (error) {
    if (error.name === 'MissingSchemaError') {
        musictype = mongoose.model('MusicType', musicTypeSchema); 
    } else {
        throw error;
    }
}

module.exports = musictype;
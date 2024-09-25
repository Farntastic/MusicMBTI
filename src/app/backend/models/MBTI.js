const mongoose = require('mongoose');

var Schema = require('mongoose').Schema;

const mbtiSchema = new Schema({
    id: { type: Number, required: true },
    mbti: { type: String, required: true },
    description: String,
}, {
    collection: 'MBTI'
});

let mbti;
try {
    mbti = mongoose.model('MBTI');
} catch (error) {
    if (error.name === 'MissingSchemaError') {
        mbti = mongoose.model('MBTI', mbtiSchema); 
    } else {
        throw error;
    }
}

module.exports = mbti;
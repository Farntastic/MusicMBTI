const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true,
    // },
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    Sex: {  
        type: String,
        required: true,
    },
    Bio: {
        type: String,
        required: false,
    },
    mbtiId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'MBTI', // เชื่อมโยงกับ Entity Mbti
    },
    login_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'Login', // เชื่อมโยงกับ Entity Login
    }
}, {
    collection: 'user'
});

let User;
try {
    User = mongoose.model('user');
} catch (error) {
    if (error.name === 'MissingSchemaError') {
        User = mongoose.model('user', UserSchema); 
    } else {
        throw error;
    }
}

module.exports = mongoose.model('user', UserSchema);
const mongoese = require('mongoose');

const userSchema = new mongoese.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercse: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        min: [6, 'Must be at least 6, got {VALUE}']
    }
}, {timestamps: true});

module.exports = mongoese.model('User', userSchema);
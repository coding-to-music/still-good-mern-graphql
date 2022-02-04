const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    Username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    itemCount: {
    },
    saveItem: []
});
const User = model('User', UserSchema);

module.exports = User;
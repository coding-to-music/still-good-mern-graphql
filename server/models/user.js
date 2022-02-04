const { Schema, model } = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
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

    savedItems: []

});
const User = model('User', UserSchema);

module.exports = User;
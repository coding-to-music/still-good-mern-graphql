const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const storageLocationSchema = new Schema({
    id: {
        type: String,
        required: false,
        trim: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
});
const storageLocation = model('storageLocation', storageLocationSchema);

module.exports = storageLocation;
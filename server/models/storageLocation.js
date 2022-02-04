const { Schema, model } = require('mongoose');
const { Schema } = mongoose;

const storageLocationSchema = new Schema({
    id: {
        type: String,
        required: true,
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
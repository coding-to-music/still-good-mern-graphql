const { Schema, model } = require('mongoose');
const { Schema } = mongoose;

const foodCategorySchema = new Schema({
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
const foodCategory = model('foodCategory', foodCategorySchema);

module.exports = foodCategory;
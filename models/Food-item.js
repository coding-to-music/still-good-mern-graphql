const {Schema, model} = require('mongoose');
const{Schema} = mongoose;

const foodItemSchema = new Schema({
    id  :{
        type: String,
        required: true,
        trim: true
        
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    category:{
        type: String,
        required: true,
        unique: true
    },
    expiration:{
        type: String,
        required: true,
        date: Date.now

    },
    
    
});
const foodItem = model('foodItem', foodItemSchema);

module.exports = foodItem;
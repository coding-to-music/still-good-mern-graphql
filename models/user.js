const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    User :{
        type: String,
        required: true,
        trim: true
        
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 7
    }
    
});
const User = model('User', UserSchema);

module.exports = User;
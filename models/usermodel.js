const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profilePic: String,
    role: {
        type: String,
       
        default: 'user'
    }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;

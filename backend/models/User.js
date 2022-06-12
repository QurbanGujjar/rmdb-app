const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now
    },
});
const User = mongoose.model("user", UserSchema)
    // User.createIndexes()
module.exports = User
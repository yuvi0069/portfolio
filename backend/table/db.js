const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://yuviabhi00:yuviabhi00@cluster0.264cezt.mongodb.net/portfolio");

// Define User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };

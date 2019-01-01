const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: String,
    password: String,
    email: String,
    isTeacher: Boolean
});

const User = mongoose.model('Users', usersSchema);

module.exports = User;
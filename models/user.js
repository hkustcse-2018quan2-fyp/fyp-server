const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    middlename: String,
    school: String,
    joinedyear: String,
    email: String,
    isTeacher: Boolean
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
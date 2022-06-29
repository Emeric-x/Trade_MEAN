const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model('User', UserSchema)
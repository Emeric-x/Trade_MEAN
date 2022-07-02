const mongoose = require('mongoose')
const group = require('./group')

const UserSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
    groups: { type: [group], required: false }
})

module.exports = mongoose.model('User', UserSchema)
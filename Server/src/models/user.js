const mongoose = require('mongoose')
const group = require('./group')

const UserSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
    groups: [{
        country: {
            id: { type: mongoose.Types.ObjectId, required: true },
            name: { type: String, required: true },
            flag: { type: String, required: true }
        },
        game: {
            id: { type: mongoose.Types.ObjectId, required: true },
            name: { type: String, required: true },
            description: { type: String, required: true },
            logo: { type: String, required: true }
        },
        rank: {
            id: { type: mongoose.Types.ObjectId, required: true },
            name: { type: String, required: true },
            logo: { type: String, require: true }
        }
    }]
})

module.exports = mongoose.model('User', UserSchema)
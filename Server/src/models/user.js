const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    // _id generated automatically
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
    groups: [{
        group_id: { type: String, required: true },
        topics: {
            country: {
                name: { type: String, required: true },
                flag: { type: String, required: true }
            },
            game: {
                name: { type: String, required: true },
                logo: { type: String, required: true },
            },
            rank: {
                name: { type: String, required: true },
                logo: { type: String, require: true }
            }
        }
    }],
    match: { type: mongoose.Types.ObjectId, required: false }
})

module.exports = mongoose.model('User', UserSchema)
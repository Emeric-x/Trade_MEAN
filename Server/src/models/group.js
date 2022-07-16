const mongoose = require('mongoose')

const GroupSchema = mongoose.Schema({
    // _id generated automatically
    topics: {
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
            name: { type: String, required: true },
            logo: { type: String, require: true }
        }
    },
    posts: [{
        id: { type: mongoose.Types.ObjectId, required: true },
        author: {
            author_id: { type: mongoose.Types.ObjectId, required: true },
            firstname: { type: String, required: true },
            lastname: { type: String, required: true },
            login: { type: String, required: true },
            avatar: { type: String, required: true }
        },
        text: { type: String, required: true }
    }]
})

module.exports = mongoose.model('Group', GroupSchema)
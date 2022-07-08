const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    _id: { type: String, required: true },
    author: {
        author_id: { type: mongoose.Types.ObjectId, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        login: { type: String, required: true },
        avatar: { type: String, required: true }
    },
    text: { type: String, required: true }
})

module.exports = mongoose.model('Post', PostSchema)
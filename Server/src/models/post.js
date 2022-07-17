const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    // _id generated automatically
    author: {
        author_id: { type: mongoose.Types.ObjectId, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        login: { type: String, required: true },
        avatar: { type: String, required: true }
    },
    text: { type: String, required: true },
    redy: [{
        user: {
            user_id: { type: mongoose.Types.ObjectId, required: true },
            firstname: { type: String, required: true },
            lastname: { type: String, required: true },
            login: { type: String, required: true },
            avatar: { type: String, required: true }
        },
        accepted: { type: Boolean, required: true }
    }]
})

module.exports = mongoose.model('Post', PostSchema)
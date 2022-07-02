const mongoose = require('mongoose')

const GroupSchema = mongoose.Schema({
    country: [{
        id: { type: mongoose.Types.ObjectId, required: true },
        name: { type: String, required: true },
        flag: { type: String, required: true }
    }],
    game: [{
        id: { type: mongoose.Types.ObjectId, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        logo: { type: String, required: true }
    }],
    rank: [{
        id: { type: mongoose.Types.ObjectId, required: true },
        name: { type: String, required: true },
        logo: { type: String, require: true }
    }]
})

module.exports = mongoose.model('Group', GroupSchema)
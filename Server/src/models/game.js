const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
    id: { type: mongoose.Types.ObjectId, required: false },
    name: { type: String, required: true },
    description: { type: String, required: true },
    logo: { type: String, required: true },
    ranks: [{
        id: { type: mongoose.Types.ObjectId, required: false },
        name: { type: String, required: true },
        logo: { type: String, require: true }
    }]
})

module.exports = mongoose.model('Game', GameSchema)
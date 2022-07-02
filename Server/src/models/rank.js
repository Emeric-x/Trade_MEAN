const mongoose = require('mongoose')

const RankSchema = mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String, require: true }
})

module.exports = mongoose.model('Rank', RankSchema)
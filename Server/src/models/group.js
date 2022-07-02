const mongoose = require('mongoose')
const country = require('./country')
const game = require('./game')
const rank = require('./rank')

const GroupSchema = mongoose.Schema({
    country: { type: country, required: true },
    game: { type: game, required: true },
    rank: { type: rank, required: true }
})

module.exports = mongoose.model('Group', GroupSchema)
const mongoose = require('mongoose')

const CountrySchema = mongoose.Schema({
    _id: { type: mongoose.Types.ObjectId, required: false },
    name: { type: String, required: true },
    flag: { type: String, required: true }
})

module.exports = mongoose.model('Country', CountrySchema)
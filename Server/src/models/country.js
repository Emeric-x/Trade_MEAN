const mongoose = require('mongoose')

const CountrySchema = mongoose.Schema({
    // _id generated automatically
    name: { type: String, required: true },
    flag: { type: String, required: true }
})

module.exports = mongoose.model('Country', CountrySchema)
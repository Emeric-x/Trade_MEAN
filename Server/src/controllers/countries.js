const Country = require("../models/country")

exports.GetAllCountries = async(req, res) => {
    try {
        const AllCountries = await Country.find()
        res.json(AllCountries)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.PostCountry = async(req, res) => {
    try {
        const country = new Country(req.body)
        await country.save()

        res.send(true)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.UpdateCountry = async(req, res) => {
    try {
        const { sName, sFlag } = req.body
        let country = await Country.findById(req.params.id)

        if (!country) {
            res.status(404).json({ msg: 'No matching country' })
        } else {
            country.name = sName
            country.flag = sFlag

            country = await Country.findOneAndUpdate({ _id: req.params.id }, game, { new: true })

            res.json(country)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetCountry = async(req, res) => {
    try {
        const country = await Country.findById(req.params.id)

        if (!country) {
            res.status(404).json({ msg: 'No matching country' })
        } else {
            res.json(country)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.DeleteCountry = async(req, res) => {
    try {
        const country = await Country.findById(req.params.id)

        if (!country) {
            res.status(404).json({ msg: 'No matching country' })
        } else {
            await Country.findByIdAndRemove({ _id: req.params.id })

            res.json({ msg: 'Country deleted' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}
const Rank = require("../models/rank")

exports.GetAllRanks = async(req, res) => {
    try {
        const AllRanks = await Rank.find()
        res.json(AllRanks)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.PostRank = async(req, res) => {
    try {
        const rank = new Rank(req.body)
        await rank.save()

        res.send(true)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.UpdateRank = async(req, res) => {
    try {
        const { sName, sLogo } = req.body
        let rank = await Rank.findById(req.params.id)

        if (!rank) {
            res.status(404).json({ msg: 'No matching rank' })
        } else {
            rank.name = sName
            rank.logo = sLogo

            rank = await Rank.findOneAndUpdate({ _id: req.params.id }, rank, { new: true })

            res.json(rank)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetRank = async(req, res) => {
    try {
        const rank = await Rank.findById(req.params.id)

        if (!rank) {
            res.status(404).json({ msg: 'No matching rank' })
        } else {
            res.json(rank)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.DeleteRank = async(req, res) => {
    try {
        const rank = await Rank.findById(req.params.id)

        if (!rank) {
            res.status(404).json({ msg: 'No matching rank' })
        } else {
            await Rank.findByIdAndRemove({ _id: req.params.id })

            res.json({ msg: 'Rank deleted' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}
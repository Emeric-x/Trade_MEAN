const Group = require("../models/group")

exports.GetAllGroups = async(req, res) => {
    try {
        const AllGroups = await Group.find()
        res.json(AllGroups)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.PostGroup = async(req, res) => {
    try {
        const group = new Group(req.body)
        await group.save()

        res.send(true)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.UpdateGroup = async(req, res) => {
    try {
        const { sCountry, sGame, sRank } = req.body
        let group = await Group.findById(req.params.id)

        if (!group) {
            res.status(404).json({ msg: 'No matching group' })
        } else {
            group.country = sCountry
            group.game = sGame
            group.rank = sRank

            group = await Group.findOneAndUpdate({ _id: req.params.id }, group, { new: true })

            res.json(group)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetGroup = async(req, res) => {
    try {
        const group = await Group.findById(req.params.id)

        if (!group) {
            res.status(404).json({ msg: 'No matching group' })
        } else {
            res.json(group)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetGroupByTopicsNames = async(req, res) => {
    try {
        const group = await this.GetAllGroups()
        let isGroupExisting = false

        group.forEach(group => {
            if (group.topics.country.name === req.body.topics.countryName && group.topics.game.name === req.body.topics.gameName && group.topics.rank.name === req.body.topics.rankName) {
                isGroupExisting = true
            }
        });

        if (isGroupExisting) {
            res.json(group)
        } else {
            this.PostGroup().body = req.body
        }

        res.status(404).json({ msg: 'No groups' })
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.DeleteGroup = async(req, res) => {
    try {
        const group = await Group.findById(req.params.id)

        if (!group) {
            res.status(404).json({ msg: 'No matching group' })
        } else {
            await Group.findByIdAndRemove({ _id: req.params.id })

            res.json({ msg: 'Group deleted' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}
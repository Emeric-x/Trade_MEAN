const Group = require("../models/group")
const Post = require("../models/post")

exports.GetAllGroups = async(req, res) => {
    try {
        const AllGroups = await Group.find()
        res.json(AllGroups)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetAllGroupsNoRes = async(req, res) => {
    try {
        const AllGroups = await Group.find()
        return AllGroups
    } catch (err) {
        console.log(err)
    }
}

exports.PostGroup = async(req, res) => {
    try {
        const group = new Group(req.body)
        await group.save()

        res.json(group)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.PostGroupNoRes = async(req, res) => {
    try {
        const group = new Group(req.body)
        await group.save()

        return group
    } catch (err) {
        console.log(err)
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

exports.GetGroupNoRes = async(req, res) => {
    try {
        const group = await Group.findById(req.body.group_id)

        if (!group) {
            return 'No matching group'
        } else {
            return group
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetGroupByTopicsNames = async(req, res) => {
    try {
        const groups = await this.GetAllGroupsNoRes(req, res)
        let groupReturn = null
        let isGroupExisting = false

        groups.forEach(group => {
            if (group.topics.country.name === req.body.topics.country.name && group.topics.game.name === req.body.topics.game.name && group.topics.rank.name === req.body.topics.rank.name) {
                isGroupExisting = true
                groupReturn = group
            }
        });

        if (!isGroupExisting) {
            groupReturn = await this.PostGroupNoRes(req, res)
        }

        res.json(groupReturn)
    } catch (err) {
        console.log(err)
        res.status(500).send(`Server Error: ${err}`)
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
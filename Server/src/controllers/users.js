const User = require("../models/user")

exports.GetAllusers = async(req, res) => {
    try {
        const AllUsers = await User.find()
        res.json(AllUsers)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.PostUser = async(req, res) => {
    try {
        const user = new User(req.body)
        await user.save()

        res.json(user)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.UpdateUserPersonalData = async(req, res) => {
    try {
        const { sFirstname, sLastname } = req.body
        let user = await User.findById(req.params.id)

        if (!user) {
            res.status(404).json({ msg: 'No matching user' })
        } else {
            user.firstname = sFirstname
            user.lastname = sLastname

            user = await user.findOneAndUpdate({ _id: req.params.id }, user, { new: true })

            res.json(user)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.UpdateUserGroups = async(req, res) => {
    try {
        let user = await User.findById(req.params.id)
        if (!user) {
            res.status(404).json({ msg: 'No matching user' })
        } else {
            user.groups.push(req.body)

            user = await User.findOneAndUpdate({ _id: req.params.id }, user, { new: true })

            res.json(user)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user) {
            res.status(404).json({ msg: 'No matching user' })
        } else {
            res.json(user)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.DeleteUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user) {
            res.status(404).json({ msg: 'No matching game' })
        } else {
            await User.findByIdAndRemove({ _id: req.params.id })

            res.json({ msg: 'user deleted' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}
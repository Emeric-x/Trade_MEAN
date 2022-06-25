const Game = require("../models/game")

exports.GetAllGames = async(req, res) => {
    try {
        const AllGames = await Game.find()
        res.json(AllGames)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.PostGame = async(req, res) => {
    try {
        const game = new Game(req.body)
        await game.save()

        res.send(game)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.UpdateGame = async(req, res) => {
    try {
        const { sName, sDescription } = req.body
        let game = await Game.findById(req.params.id)

        if (!game) {
            res.status(404).json({ msg: 'No matching game' })
        } else {
            game.name = sName
            game.description = sDescription

            game = await Game.findOneAndUpdate({ _id: req.params.id }, game, { new: true })

            res.json(game)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetGame = async(req, res) => {
    try {
        const game = await Game.findById(req.params.id)

        if (!game) {
            res.status(404).json({ msg: 'No matching game' })
        } else {
            res.json(game)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.DeleteGame = async(req, res) => {
    try {
        const game = await Game.findById(req.params.id)

        if (!game) {
            res.status(404).json({ msg: 'No matching game' })
        } else {
            await Game.findByIdAndRemove({ _id: req.params.id })

            res.json({ msg: 'Game deleted' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}
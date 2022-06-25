const Game = require("../models/game")

exports.GetAllGames = async(req, res) => {
    try {
        const AllGames = await Game.find()
        res.json(AllGames)
    } catch (err) {
        console.log(error)
        res.status(500).send('error')
    }
}

exports.PostGame = async(req, res) => {
    try {
        const game = new Game(req.body)
        await game.save()

        res.send(game)
    } catch (err) {
        console.log(error)
        res.status(500).send('error')
    }
}
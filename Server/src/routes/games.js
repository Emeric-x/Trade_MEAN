const express = require('express')
const router = express.Router()
const gamesController = require('../controllers/games')

router.get('/', gamesController.GetAllGames)
router.post('/', gamesController.PostGame)

module.exports = router
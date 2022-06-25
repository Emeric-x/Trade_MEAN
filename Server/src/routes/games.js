const express = require('express')
const router = express.Router()
const gamesController = require('../controllers/games')

router.get('/', gamesController.GetAllGames)
router.post('/', gamesController.PostGame)
router.put('/:id', gamesController.UpdateGame)
router.get('/:id', gamesController.GetGame)
router.delete('/:id', gamesController.DeleteGame)

module.exports = router
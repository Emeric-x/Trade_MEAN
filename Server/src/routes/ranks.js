const express = require('express')
const router = express.Router()
const ranksController = require('../controllers/games')

router.get('/', ranksController.GetAllRanks)
router.post('/', ranksController.PostRank)
router.put('/:id', ranksController.UpdateRank)
router.get('/:id', ranksController.GetRank)
router.delete('/:id', ranksController.DeleteRank)

module.exports = router
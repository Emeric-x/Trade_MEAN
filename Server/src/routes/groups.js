const express = require('express')
const router = express.Router()
const groupsController = require('../controllers/groups')

router.get('/', groupsController.GetAllGroups)
router.post('/', groupsController.PostGroup)
router.put('/:id', groupsController.UpdateGroup)
router.get('/:id', groupsController.GetGroup)
router.delete('/:id', groupsController.DeleteGroup)

module.exports = router
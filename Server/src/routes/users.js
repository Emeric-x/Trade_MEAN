const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

router.get('/', usersController.GetAllusers)
router.post('/', usersController.PostUser)
router.put('/PersonalData?:id', usersController.UpdateUserPersonalData)
router.put('/Groups/:id', usersController.UpdateUserGroups)
router.get('/:id', usersController.GetUser)
router.delete('/:id', usersController.DeleteUser)

module.exports = router
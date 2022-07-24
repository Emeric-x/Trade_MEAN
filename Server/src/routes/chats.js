const express = require('express')
const router = express.Router()
const chatsController = require('../controllers/chats')

router.get('/', chatsController.GetAllChats)
router.post('/', chatsController.PostChat)
router.put('/messages/:id', chatsController.UpdateMessage)
router.get('/:id', chatsController.GetChatById)

module.exports = router
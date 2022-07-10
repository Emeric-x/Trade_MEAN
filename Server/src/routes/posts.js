const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts')

router.get('/', postsController.GetAllPosts)
router.post('/', postsController.PutPost)
router.put('/:id', postsController.UpdatePost)
router.get('/:id', postsController.GetPost)
router.delete('/:id', postsController.DeletePost)

module.exports = router
const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts')

router.get('/', postsController.GetAllPosts)
router.post('/', postsController.PostPost)
router.post('/redy', postsController.AddRedy)
router.put('/:id', postsController.UpdatePost)
router.get('/:id', postsController.GetPost)
router.delete('/:id', postsController.DeletePost)
router.get('/myPosts/:author_id', postsController.GetPostsByAuthorId)

module.exports = router
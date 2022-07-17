const GroupController = require("../controllers/groups")
const Post = require("../models/post")

exports.GetAllPosts = async(req, res) => {
    try {
        const AllPosts = await Post.find()
        res.json(AllPosts)
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetAllPostsNoRes = async(req, res) => {
    try {
        const AllPosts = await Post.find()
        return AllPosts
    } catch (err) {
        console.log(err)
    }
}

exports.PostPost = async(req, res) => {
    try {
        const post = new Post(req.body.post)
        await post.save()

        const result = await GroupController.PushPost(req, res, post)
        if (result) {
            res.send(true)
        } else {
            res.send(false)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.UpdatePost = async(req, res) => {
    try {
        const { sCountry, sGame, sRank } = req.body
        let post = await Post.findById(req.params.id)

        if (!post) {
            res.status(404).json({ msg: 'No matching post' })
        } else {
            post.country = sCountry
            post.game = sGame
            post.rank = sRank

            post = await Post.findOneAndUpdate({ _id: req.params.id }, post, { new: true })

            res.json(post)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetPost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            res.status(404).json({ msg: 'No matching post' })
        } else {
            res.json(post)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.GetPostsByAuthorId = async(req, res) => {
    try {
        const posts = await this.GetAllPostsNoRes(req, res)
        let myPosts = []

        if (!posts) {
            res.status(404).json({ msg: 'No posts' })
        } else {
            posts.forEach(post => {
                if (post.author.author_id === req.params.author_id) {
                    myPosts.push(post)
                }
            });
            res.json(myPosts)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}

exports.DeletePost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            res.status(404).json({ msg: 'No matching post' })
        } else {
            await Post.findByIdAndRemove({ _id: req.params.id })

            res.json({ msg: 'Post deleted' })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error')
    }
}
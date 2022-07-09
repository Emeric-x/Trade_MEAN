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

exports.PostPost = async(req, res) => {
    try {
        const post = new Post(req.body)
        await post.save()

        res.send(true)
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
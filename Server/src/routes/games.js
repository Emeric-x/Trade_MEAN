const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello Woooooooooooorld!')
});

module.exports = router
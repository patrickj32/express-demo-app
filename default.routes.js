const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send('hello from the / route asshole')
})

router.get('/patrick', function (req, res) {
    res.send('hello from the Patrick fucking route')
})

module.exports= router
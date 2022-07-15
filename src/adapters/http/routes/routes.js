const express = require('express')
const animaisGetAllController = require('../controller/animaisGetAllController')

var router = express.Router()

// Retornando todos os animais
router.get("/animais", (req, res) => {
    return animaisGetAllController(req, res)
})


module.exports = router
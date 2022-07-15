const express = require('express')
const animaisGetAllController = require('../controller/animaisGetAllController')
const animaisGetOneController = require('../controller/animaisGetOneController')

var router = express.Router()

// Retornando todos os animais
router.get("/animais", (req, res) => {
    return animaisGetAllController(req, res)
})

// Retornando um animal
router.get("animais/:index", (req, res) => {
    return animaisGetOneController(req, res)
})




module.exports = router
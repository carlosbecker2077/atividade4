const express = require('express')
const animaisGetAllController = require('../controller/animaisGetAllController')
const animaisGetOneController = require('../controller/animaisGetOneController')
const animaisPutOneController = require('../controller/animaisPutOneController')
const animaisPostOneController = require('../controller/animaisPostOneController')
const animaisDeleteOneController = require('../controller/animaisDeleteOneController')

var router = express.Router()

// Retornando todos os animais
router.get("/animais", (req, res) => {
    return animaisGetAllController(req, res)
})

// Retornando um animal
router.get("/animais/:id", (req, res) => {
    return animaisGetOneController(req, res)
})

router.put("/animais/:index", (req, res) => {
    return animaisPutOneController(req, res)
})

router.post("/animais", (req, res) => {
    return animaisPostOneController(req, res)
})

router.delete("/animais/:index", (req, res) => {
    return animaisDeleteOneController(req, res)
})


module.exports = router
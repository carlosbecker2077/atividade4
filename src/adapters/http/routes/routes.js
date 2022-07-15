const express = require('express')
const animaisGetAllController = require('../controller/animaisGetAllController')
const animaisGetOneController = require('../controller/animaisGetOneController')
const animaisPutOneController = require('../controller/animaisPutOneController')

var router = express.Router()

// Retornando todos os animais
router.get("/animais", (req, res) => {
    return animaisGetAllController(req, res)
})

// Retornando um animal
router.get("/animais/:index", (req, res) => {
    return animaisGetOneController(req, res)
})

router.put("/animais/:index", (req, res) => {
    return animaisPutOneController(req, res)
})

router.post("/animais/:index", (req, res) => {
    return animaisPutOneController(req, res)
})

router.delete("/animais/:index", (req, res) => {
    return animaisPutOneController(req, res)
})




module.exports = router
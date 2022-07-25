const express = require('express')
const animalsGetAllController = require('../controller/animalsGetAllController')
const animalsGetOneController = require('../controller/animalsGetOneController')
const animalsPutOneController = require('../controller/animalsPutOneController')
const animalsPostOneController = require('../controller/animalsPostOneController')
const animalsDeleteOneController = require('../controller/animalsDeleteOneController')

var router = express.Router()

// Retornando todos os animals
router.get("/animals", (req, res) => {
    return animalsGetAllController(req, res)
})

// Retornando um animal
router.get("/animals/:id", (req, res) => {
    return animalsGetOneController(req, res)
})

router.put("/animals/:id", (req, res) => {
    return animalsPutOneController(req, res)
})

router.post("/animals", (req, res) => {
    return animalsPostOneController(req, res)
})

router.delete("/animals/:id", (req, res) => {
    return animalsDeleteOneController(req, res)
})


module.exports = router
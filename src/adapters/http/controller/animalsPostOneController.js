const animalsPostOneUseCase = require('../../../usecase/animalsPostOneUseCase')


module.exports = function animalsPostOneController (req, res){
    try{
        const { animal, name, species, age, weigth } = req.body
        const postOne = animalsPostOneUseCase(animal, name, species, age, weigth)
        return res.status(200).json(postOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}
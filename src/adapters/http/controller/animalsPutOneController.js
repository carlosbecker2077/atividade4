const animalsPutOneUseCase = require('../../../usecase/animalsPutOneUseCase')

module.exports = function animalsPutOneController (req, res){
    try{
        const { id } = req.params
        const { animal, name, species, age, weigth } = req.body
        const putOne = animalsPutOneUseCase(id, animal, name, species, age, weigth)
        return res.status(200).json(putOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}

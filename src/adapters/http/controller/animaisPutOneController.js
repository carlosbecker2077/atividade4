const animalsPutOneUseCase = require('../../../usecase/animalsPutOneUseCase')

module.exports = function animalsPutOneController (req, res){
    try{
        const { id } = req.params
        const { animal, nome, especie, idade, peso } = req.body
        const putOne = animalsPutOneUseCase(id, animal, nome, especie, idade, peso)
        return res.status(200).json(putOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}

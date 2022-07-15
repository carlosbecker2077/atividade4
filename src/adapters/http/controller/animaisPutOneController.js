const animaisDB = require('../../../repository/animaisDB')
const animaisPutOneUseCase = require('../../../usecase/animaisPutOneUseCase')

module.exports = function animaisPutOneController (req, res){
    try{
        const { index } = req.params
        const { newAnimal } = req.body
        const putOne = animaisPutOneUseCase(animaisDB, index, newAnimal)
        return res.status(200).json(putOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}
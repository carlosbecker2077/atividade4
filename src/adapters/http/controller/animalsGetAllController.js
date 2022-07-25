const animalsGetAllUseCase = require('../../../usecase/animalsGetAllUseCase')

module.exports = function animalsGetAllController (req, res){
    try{
        const getAll = animalsGetAllUseCase(aA)
        return res.status(200).json(getAll)
    }catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}
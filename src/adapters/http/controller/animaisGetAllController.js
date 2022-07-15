const animaisDB = require('../../../repository/animaisDB')
const animaisGetAllUseCase = require('../../../usecase/animaisGetAllUseCase')

module.exports = function animaisGetAllController (req, res){
    try{
        const getAll = animaisGetAllUseCase(animaisDB)
        return res.status(200).json(getAll)
    }catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}
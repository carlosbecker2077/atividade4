const animaisDB = require('../../../repository/animaisDB')
const animaisGetOneUseCase = require('../../../usecase/animaisGetOneUseCase')

module.exports = function animaisGetOneUseCase (req, res){
    try{
        const { index } = req.params
        const getOne = animaisGetOneUseCase(animaisDB, index)
        return res.status(200).json(getOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}
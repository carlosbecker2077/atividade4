const animaisGetOneUseCase = require('../../../usecase/animaisGetOneUseCase')

module.exports = function animaisGetOneController (req, res){
    try{
        const { id } = req.params
        const getOne = animaisGetOneUseCase(id)
        return res.status(200).json(getOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}
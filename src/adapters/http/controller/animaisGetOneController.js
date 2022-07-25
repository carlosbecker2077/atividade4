const animalsGetOneUseCase = require('../../../usecase/animalsGetOneUseCase')

module.exports = function animalsGetOneController (req, res){
    try{
        const { id } = req.params
        const getOne = animalsGetOneUseCase(id)
        return res.status(200).json(getOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}

const animalsDeleteOneUseCase = require('../../../usecase/animalsDeleteOneUseCase')

module.exports = function animalsDeleteOneController (req, res){
    try{
        const { id } = req.params
        const deleteOne = animalsDeleteOneUseCase(id)
        return res.status(200).json(deleteOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}
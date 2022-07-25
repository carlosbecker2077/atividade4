
const animalsDeleteOneUseCase = require('../../../usecase/animalsDeleteOneUseCase')

module.exports = function animalsDeleteOneController (req, res){
    try{
        const { index } = req.params
        const deleteOne = animalsDeleteOneUseCase(index)
        return res.status(200).json(deleteOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}
const animaisDB = require('../../../repository/animaisDB')
const animaisDeleteOneUseCase = require('../../../usecase/animaisDeleteOneUseCase')

module.exports = function animaisDeleteOneController (req, res){
    try{
        const { index } = req.params
        const deleteOne = animaisDeleteOneUseCase(animaisDB, index)
        return res.status(200).json(deleteOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}
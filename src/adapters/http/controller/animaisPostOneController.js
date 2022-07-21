const animaisDB = require('../../../repository/animaisDB')
const animaisPostOneUseCase = require('../../../usecase/animaisPostOneUseCase')


module.exports = function animaisPostOneController (req, res){
    try{
        const { animal, nome, especie, idade, peso } = req.body
        const postOne = animaisPostOneUseCase(animaisDB, animal, nome, especie, idade, peso)
        return res.status(200).json(postOne)
    } catch (error) {
        return res.status(500).json({errorMessage: error.message})
    }
}
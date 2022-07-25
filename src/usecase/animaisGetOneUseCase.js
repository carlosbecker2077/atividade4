const animaisDB = require('../repository/animaisDB')

module.exports = function animaisGetOneUseCase(id) {
    const animal = animaisDB.filter((item) =>{
        return item.id == id // se eu colocar === em algum momento o id vira string
    })
    if (animal.length > 0) {
        return animal
    } else {
        throw new Error('Animal not found.')
    }
    
}
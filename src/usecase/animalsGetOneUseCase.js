const animalsDB = require('../repository/animalsDB')

module.exports = function animalsGetOneUseCase(id) {
    const animal = animalsDB.filter((item) =>{
        return item.id == id // se eu colocar === em algum momento o id vira string
    })
    if (animal.length <= 0) {
        throw new Error('Animal not found.')}
    
    return animal
    
}
const animaisDB = require('../repository/animaisDB')

module.exports = function animaisGetOneUseCase(id) {
    const animal = animaisDB.filter( (item) =>{
        return item.id === id
    })
    return animal
}
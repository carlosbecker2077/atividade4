const animaisDB = require('../repository/animaisDB')

module.exports = function animaisPutOneUseCase(id, animal, nome, especie, idade, peso) {
    const animalFiltered = animaisDB.filter((item) =>{
        return item.id === id // só por enquanto
    })
    if (animalFiltered.length > 0) {
        Object.freeze(animalFiltered.id)
        return animalFiltered = {animal, nome, especie, idade, peso}
    } else {
        throw new Error('Animal not found.')
    }
    
}
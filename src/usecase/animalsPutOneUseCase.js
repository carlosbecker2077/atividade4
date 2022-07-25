const animalsDB = require('../repository/animalsDB')

module.exports = function animalsPutOneUseCase(id, animal, name, species, age, weigth) {
    const animalFiltered = animalsDB.filter((item) =>{
        return item.id === id // só por enquanto
    })
    if (animalFiltered.length > 0) {
        Object.freeze(animalFiltered.id)
        return animalFiltered = {animal, name, species, age, weigth}
    } else {
        throw new Error('Animal not found.')
    }
    
}
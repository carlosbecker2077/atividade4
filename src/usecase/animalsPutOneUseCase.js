const animalsDB = require('../repository/animalsDB')

module.exports = function animalsPutOneUseCase(id, animal, name, species, age, weigth) {
    const filteredAnimal = animalsDB.filter((item) =>{
        return item.id == id
    })

    if (filteredAnimal.length > 0) {
        Object.freeze(filteredAnimal.id)
        return filteredAnimal = {animal, name, species, age, weigth}
    } else {
        throw new Error('Animal not found.')
    }
}
const animalsDB = require('../repository/animalsDB')

module.exports = function animalsPutOneUseCase(id, animal, name, species, age, weigth) {
    const filteredAnimal = animalsDB.filter((item) => {
        return item.id == id
    })

    if (!filteredAnimal.length){
        throw new Error('Animal not found')
    }

    const mappedAnimal = animalsDB.map((item) =>{
        if (item.id == id){
            item.animal = animal
            item.name = name
            item.species = species
            item.age = age
            item.weigth = weigth
        }
    })
    return `Animal ID: ${id} has been modified`
}
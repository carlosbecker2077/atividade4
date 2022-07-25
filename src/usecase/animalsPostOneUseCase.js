const { v4: uuidv4 } = require('uuid');

module.exports = function animalsPostOneUseCase (animals, animal, name, species, age, weigth){
    const id = uuidv4()
    animals.push({id, animal, name, species, age, weigth})
    return id
}
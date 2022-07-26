const { v4: uuidv4 } = require('uuid');
const animalsDB = require("../repository/animalsDB")

module.exports = function animalsPostOneUseCase (animal, name, species, age, weigth){
    const id = uuidv4()
    animalsDB.push({id, animal, name, species, age, weigth})
    return id
}
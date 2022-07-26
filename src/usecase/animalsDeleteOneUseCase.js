const animalsDB = require("../repository/animalsDB")

module.exports = function animalsDeleteOneUseCase(id){
    const filteredAnimal = animalsDB.filter((item) => {
        return item.id == id
    })

    if (!filteredAnimal.length){
        throw new Error('Animal not found')
    }

    const indexAnimal = animalsDB.findIndex((item) => {
        return item.id == id
    })

    animalsDB.splice(indexAnimal, 1)
    return `Animal ID: ${id} has been deleted`

}
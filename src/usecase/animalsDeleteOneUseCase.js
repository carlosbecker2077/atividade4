module.exports = function animalsDeleteOneUseCase(animals, index){
    animals.splice(index, 1)
    return `Animal ${index} has been deleted`
}
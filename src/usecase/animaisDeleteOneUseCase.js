module.exports = function animaisDeleteOneUseCase(animais, index){
    animais.splice(index, 1)
    return `Animal ${index} has been deleted`
}
module.exports = function animaisPostOneUseCase (animais, id, animal, nome, especie, idade, peso){
    return animais.push({id, animal, nome, especie, idade, peso})
}
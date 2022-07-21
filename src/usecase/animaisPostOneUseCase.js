const { v4: uuidv4 } = require('uuid');

module.exports = function animaisPostOneUseCase (animais, animal, nome, especie, idade, peso){
    const id = uuidv4()
    animais.push({id, animal, nome, especie, idade, peso})
    return id
}
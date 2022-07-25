const animalsDB = require('../../../repository/animalsDB')

module.exports = function animalsDeleteOneUseCase(animalsDB, index){
    animalsDB.splice(index, 1)
    return `Animal ${index} has been deleted`
}
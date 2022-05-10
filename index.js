// Este Script es una manera de comprobar nuestro codigo, HAY QUE HACER PRUEBAS DE UNIDAD,
//   que reemplace este archivo "index.js"

const Reader = require("./lib/utils/Reader")
const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonfile("explorers.json")
// console.log(explorers)


// Aplicación del ExplorerService sobre la lista de explorers

// console.log(ExplorerService.filterByMission(explorers, "node"))
// console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))
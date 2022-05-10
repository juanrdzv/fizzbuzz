const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonfile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
        
    }
    static applyFizzbuzz(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonfile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonfile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static getExplorersByStack(stack){
        const explorers = Reader.readJsonfile("explorers.json");
        return ExplorerService.filterByStack(explorers, stack);
    }
}

module.exports = ExplorerController;
// ************************   Esto se va a borrar *************************************
// const fs = require("fs");          
// const rawdata = fs.readFileSync("explorers.json");
// const explorers = JSON.parse(rawdata);

const explorersInNode = explorers.filter((explorer) => explorer.mission == "node"); // creo que esto tambien se va a quitar

const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);

const assignFizzTrick = function(explorer){
     if(explorer.score%5 === 0 && explorer.score%3 === 0){
        explorer.trick = "FIZZBUZZ";
        return explorer;
    }else if(explorer.score%3 === 0){
        explorer.trick = "FIZZ";
        return explorer;
    } else if(explorer.score%5 === 0){
        explorer.trick = "BUZZ";
        return explorer;
    } else{
        explorer.trick = explorer.score;
        return explorer;
    }
};

const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));
console.log (explorersInNodeAndFizzTrick)



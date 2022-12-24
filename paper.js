function getComputerChoice() {
    let choice = ["paper", "rock", "scissors"];
    let output = choice[Math.floor(Math.random() * choice.length)];
    return output;
}

var computerSelection = "";
var playerSelection   = "";

function playRound(playerSelection, computerSelection) {
      var computerSelection = getComputerChoice();
      var playerSelection = prompt("rock").toLowerCase();
      
    if (playerSelection == computerSelection) {
        return "Tie game";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win"
    } else {
        return "You lose!"
    }
}
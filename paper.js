function getComputerChoice() {
    let choice = ["paper", "rock", "scissors"];
    let output = choice[Math.floor(Math.random() * choice.length)];
    return output;
}

var computerSelection = "";
var playerSelection = "";

function playRound(playerSelection, computerSelection) {
    var computerSelection = getComputerChoice();
    var playerSelection = prompt("rock").toLowerCase();

    if (playerSelection == computerSelection) {
        return "Tie game";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++
        return "You Win!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        return "You Win"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++
        return "You win"
    } else {
        computerScore++
        return "You lose!"
    }
}

let playerScore = 0
let computerScore = 0


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection))
        console.log("Your Score = " + playerScore);
        console.log("Computer's Score = " + computerScore);
    } if (playerScore > computerScore) {
        console.log("You are the winner!")
    }
    else if (playerScore < computerScore) {
        console.log("You lost!")
    } else{
        console.log("good fight!")
    }
}

game()
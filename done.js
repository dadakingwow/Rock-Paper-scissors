const choice = ["paper", "scissors", "rock"];

function getComputerchoice() {
    const output = choice[Math.floor(Math.random() * choice.length)];
    return output;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie game"
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "You win!"
    }
    else {
        return "You lose!"
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choose = prompt("paper,rock,scissors");
        if (choose == null) {
            continue;
        }
        const chooseInLower = choose.toLowerCase();
        if (choice.includes(chooseInLower)) {
            validatedInput = true;
            return chooseInLower;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerchoice();
        if (playRound(playerSelection, computerSelection) == "You win!") {
            playerScore++
        }
        else if (playRound(playerSelection, computerSelection) == "You lose!") {
            computerScore++
        }
        console.log(playRound(playerSelection, computerSelection))
        console.log("Your score= " + playerScore)
        console.log("Computerscore = " + computerScore)
    }
    console.log("Game over!")
    if (playerScore > computerScore) {
        console.log("You win!")
    }
    else if (playerScore < computerScore) {
        console.log("You lose!")
    }
    else {
        console.log("Nice Match")
    }
}

game()
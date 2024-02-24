function getComputerChoice() {
    let computerOptions = [`Rock`, `Paper`, `Scissors`];
    return computerOptions[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionUpper = playerSelection.toUpperCase();
    let computerSelectionUpper = computerSelection.toUpperCase();
    
    if (playerSelectionUpper === computerSelectionUpper) {
        return `Draw!`
    }
    if (playerSelectionUpper === `ROCK`) {
        if (computerSelectionUpper === `SCISSORS`) {
            return `You win! Rocks beats Scissors`
        }
        else {
            return `You lose! Paper beats Rock`
        }
    }
    else if (playerSelectionUpper === `PAPER`) {
        if (computerSelectionUpper === `ROCK`) {
            return `You win! Paper beats Rock`
        }
        else {
            return `You lose! Scissors beats Paper`
        }
    }
    else {
        if (computerSelectionUpper === `PAPER`) {
            return `You win! Scissors beats Paper`
        }
        else {
            return `You lose! Rock beats Scissors`
        }
    }
    return
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    let winner = `No winner, this 5 game series is a draw!`;

    for (let i = 0; i < 5; i++) {
        let result = playRound(prompt(`Pick Rock, Paper, or Scissors!`), getComputerChoice());
        if (result.includes(`win`)) {
            playerWins++;
        }
        else if (result.includes(`lose`)) {
            computerWins++;
        }
        console.log(result);
    }
    if (playerWins > computerWins) {
        winner = `You won the 5 game series!`;
    }
    else if (computerWins) {
        winner = `You lost the 5 game series!`;
    }
    console.log(winner);
    return
}

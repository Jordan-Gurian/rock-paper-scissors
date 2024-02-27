let rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    playRound('Rock', getComputerChoice())
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){
    playRound('Paper', getComputerChoice());
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){
    playRound('Scissors', getComputerChoice());
});


function getComputerChoice() {
    let computerOptions = [`Rock`, `Paper`, `Scissors`];
    return computerOptions[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let playerScore = document.querySelector('.player-score > span');
    let computerScore = document.querySelector('.computer-score > span');
    let winner = document.querySelector('.winner-announce');

    let results = document.querySelector('.results');
    console.log(playerSelection);
    let playerSelectionUpper = playerSelection.toUpperCase();
    let computerSelectionUpper = computerSelection.toUpperCase();
    
    if (playerSelectionUpper === computerSelectionUpper) {
        results.textContent = 'Draw!'
        return
    }
    if (playerSelectionUpper === `ROCK`) {
        if (computerSelectionUpper === `SCISSORS`) {
            results.textContent = `You win! Rocks beats Scissors`;
            playerScore.textContent++;
        }
        else {
            results.textContent = `You lose! Paper beats Rock`;
            computerScore.textContent++;
        }
    }
    else if (playerSelectionUpper === `PAPER`) {
        if (computerSelectionUpper === `ROCK`) {
            results.textContent = `You win! Paper beats Rock`;
            playerScore.textContent++;
        }
        else {
            results.textContent = `You lose! Scissors beats Paper`;
            computerScore.textContent++;
        }
    }
    else {
        if (computerSelectionUpper === `PAPER`) {
            results.textContent = `You win! Scissors beats Paper`;
            playerScore.textContent++;
        }
        else {
            results.textContent = `You lose! Rock beats Scissors`;
            computerScore.textContent++;
        }
    }
    if (winner.textContent == '' && Number(playerScore.textContent) === 5) {
        winner.textContent = 'Congrats! You won 5 games first!';
    }
    else if (winner.textContent == '' && Number(computerScore.textContent) === 5) {
        winner.textContent = 'Sorry! The computer won 5 games first!';
    }

    return
}

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerChoice1, computerChoice) {
    let result;
    console.log(`Computer choses ${computerChoice}`);
    if (playerChoice1 == computerChoice) {
        result = "It's a tie!"
    } else if (playerChoice1 == 'rock') {
        if (computerChoice == 'paper') {
            result = 'You lose! Paper beats Rock.';
        } else {
            result = 'You win! Rock beats Scissors.';
        }
    } else if (playerChoice1 == 'paper') {
        if (computerChoice == 'rock') {
            result = 'You win! Paper beats Rock';
        } else {
            result = 'You lose! Scissors beat Paper';
        }
    } else if (playerChoice1 == 'scissors') {
        if (computerChoice == 'rock') {
            result = 'You lose! Rock beats Scissors';
        } else {
            result = 'You win! Scissors beat paper';
        } 
    } else {
        result = 'Oops! Something went wrong!'
    }
    return result;
}

let playerChoice = prompt('Rock, Paper or Scissors?').toLowerCase();

console.log(playRound(playerChoice, computerPlay()));
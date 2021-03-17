function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerChoice1, computerChoice) {
    let result;
    //console.log(`Computer choses ${computerChoice}`);
    if (playerChoice1 == computerChoice) {
        result = "tie"
    } else if (playerChoice1 == 'rock') {
        if (computerChoice == 'paper') {
            result = 'cPbR'; // computer - Paper beats Rock
        } else {
            result = 'uRbS'; // user - Rock beats Scissors
        }
    } else if (playerChoice1 == 'paper') {
        if (computerChoice == 'rock') {
            result = 'uPbR';
        } else {
            result = 'cSbP';
        }
    } else if (playerChoice1 == 'scissors') {
        if (computerChoice == 'rock') {
            result = 'cRbS';
        } else {
            result = 'uSbP';
        } 
    } else {
        result = 'Oops! Something went wrong!'
    }
    return result;
}

let playerChoice; 

function game() {
    let userScore = 0;
    let computerScore = 0;

    while( userScore < 5 && computerScore < 5 ){
        playerChoice = prompt('Rock, Paper or Scissors?').toLowerCase();

        let result = playRound(playerChoice, computerPlay());
        if (result == 'tie'){
            document.getElementById("result").innerHTML = "It's a tie!";
        } else if (result == 'cPbR') {
            document.getElementById("result").innerHTML = 'You lose! Paper beats Rock.';
            computerScore += 1;
        } else if (result == 'uRbS' ) {
            document.getElementById("result").innerHTML = 'You win! Rock beats Scissors.';
            userScore += 1;
        } else if (result == 'uPbR') {
            document.getElementById("result").innerHTML = 'You win! Paper beats Rock.';
            userScore += 1;
        } else if (result == 'cSbP') {
            document.getElementById("result").innerHTML = 'You lose! Scissors beat Paper.';
            computerScore += 1;
        } else if (result == 'cRbS') {
            document.getElementById("result").innerHTML = 'You lose! Rock beats Scissors.';
            computerScore += 1;
        } else if (result == 'uSbP') {
            document.getElementById("result").innerHTML = 'You win! Scissors beat Paper.';
            userScore += 1;
        }
        
    }

    if (userScore == 5) {
        document.getElementById("result").innerHTML = 'Congrats! You won!';
    } else {
        document.getElementById("result").innerHTML = 'Sorry, you lost :(';
    }
}

game();


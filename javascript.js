function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        return "Rock";
    }else if (randNum == 1) {
        return "Paper";
    }else if (randNum == 2){
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let firstSlice = playerSelection.slice(0, 1).toUpperCase();
    let secondSlice = playerSelection.slice(1).toLowerCase();
    playerSelection = firstSlice.concat(secondSlice);

    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            return "You tied! Rock ties Rock";
        }else if (computerSelection == "Paper") {
            loseCount++;
            return "You lose! Paper beats Rock";
        }else {
            winCount++;
            return "You win! Rock beats Scissors";
        }
    }else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            winCount++;
            return "You win! Paper beats Rock";
        }else if (computerSelection == "Paper") {
            return "You tied! Paper ties Paper";
        }else {
            loseCount++;
            return "You Lose! Scissors beats Paper";
        }
    }else {
        if (computerSelection == "Rock") {
            loseCount++;
            return "You Lose! Rock beats Scissors";
        }else if (computerSelection == "Paper") {
            winCount++;
            return "You Win! Scissors beats Paper";
        }else {
            return "You tied! Scissors ties Scissors";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        computer = getComputerChoice();
        player = prompt("Make your choice: Rock, Paper or Scissors");

        console.log(playRound(player, computer));
        
        if (i == 4) {
            if (winCount > loseCount) {
                console.log("You Won!");
            }else if (winCount < loseCount) {
                console.log("You Lost!");
            }else {
                console.log("It's a tie!");
            }
        }
    }
}

let winCount = 0;
let loseCount = 0;

game();
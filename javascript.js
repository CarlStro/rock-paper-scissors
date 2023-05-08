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

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

const colors = ['#6aa7ac', '#b1be62', '#d6a459', '#c759d6', '#7a59d6'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];

function playRound(playerSelection, computerSelection) {
    randomColor = colors[Math.floor(Math.random() * colors.length)];

    buttons.forEach((button) => {
        if (button.classList.contains('pressed')) button.classList.toggle('pressed');
    });

    if (playerSelection == "Rock") {
        rock.classList.toggle('pressed');
        resultText.style.backgroundColor = randomColor;

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
        paper.classList.toggle('pressed');
        resultText.style.backgroundColor = randomColor;

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
        scissors.classList.toggle('pressed');
        resultText.style.backgroundColor = randomColor;

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

let winCount = 0;
let loseCount = 0;

const scoreYou = document.querySelector('.scoreYou');
const scoreAI = document.querySelector('.scoreAI');
const buttons = document.querySelectorAll('button');
const resultText = document.querySelector('.result');
const finalText = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (winCount == 5 || loseCount == 5) {
            winCount = 0;
            loseCount = 0;
        }
        let result = playRound(button.id, getComputerChoice());
        scoreYou.innerHTML = `You ${winCount}`;
        scoreAI.innerHTML = `${loseCount} AI`;
        resultText.textContent = result;
        if (winCount == 5) {
            finalText.textContent = 'You are the winner!';
            resultText.appendChild(finalText);
        } else if (loseCount ==5) {
            finalText.textContent = 'The game is lost..';
            resultText.appendChild(finalText);
        }
    });
});

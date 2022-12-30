let computerChoice= "";
let playerChoice = "";
let playerWins = 0;
let computerWins = 0;
let text  = document.querySelector('.result-text');
let playerScoreText = document.querySelector('.player-counter');
let computerScoreText = document.querySelector('.computer-counter');
const options = document.querySelectorAll('.choice');


options.forEach(option => option.addEventListener('click', playRound));

function assignPlayerChoice(e){
    if(e.target == options[0]){
        playerChoice = "rock";
        console.log(playerChoice);
    }else if(e.target == options[1]){
        playerChoice = "paper";
        console.log(playerChoice);
    }else if(e.target == options[2]){
        playerChoice = "scissors";
        console.log(playerChoice);
    }
}

function getComputerChoice(){
    let num = getRndInteger(0,2);
    switch(num){
        case 0:
            computerChoice = "rock";
            break;
        case 1 :
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";        
    }
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function compareResults(){
    if(playerChoice === computerChoice){
        text.innerHTML = "You both chose " + playerChoice.toUpperCase() + ". It\'s a tie!";
    }else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
        text.innerHTML = "You won! " + playerChoice.toUpperCase() + " beats " + computerChoice.toUpperCase() + "!";
        playerWins++;
    }else{
        text.innerHTML = "You lose! " + computerChoice.toUpperCase() + " beats " + playerChoice.toUpperCase() + "!";
        computerWins++;
    }
}

function printScores(){
    playerScoreText.innerHTML = playerWins;
    computerScoreText.innerHTML = computerWins;
}

function playRound(e){
    if(playerWins >=5 || computerWins >=5){
        return;
    }
    assignPlayerChoice(e);
    getComputerChoice();
    compareResults();
    printScores();
    if(computerWins ==5){
        text.innerHTML = "Game Over! You lose! Get gud!";
    }else if(playerWins == 5){
        text.innerHTML = "Game Over! You won!";
    }
}
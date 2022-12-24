let computerChoice;
let playerChoice;
let playerWins = 0;
let computerWins = 0;

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
            computerChoice = "scissor";        
    }
    console.log("Computer choice: " + computerChoice);
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getPlayerChoice(){
    let choice = prompt("Enter your choice (Type rock, paper, or scissor. Case insensitive): ");
    playerChoice = choice.toLocaleLowerCase();
    console.log("Player choice: " + playerChoice);
}

function playRound(playerChoice,computerChoice){
    if(playerChoice === computerChoice){
        console.log("You both chose " + playerChoice + ". It\s a tie!");
    }else if (playerChoice === "rock" && computerChoice === "scissor" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissor" && computerChoice === "paper"){
        console.log("You won!");
        playerWins++;
    }else{
        console.log("You lost");
        computerWins++;
    }
}
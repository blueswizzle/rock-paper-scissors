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
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getPlayerChoice(){
    let choice = prompt("Enter your choice (Type rock, paper, or scissor. Case insensitive): ");
    playerChoice = choice.toLocaleLowerCase();
}

function playRound(playerChoice,computerChoice){
    if(playerChoice === computerChoice){
        console.log("You both chose " + playerChoice + ". It\s a tie!");
    }else if (playerChoice === "rock" && computerChoice === "scissor" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissor" && computerChoice === "paper"){
        console.log("You won! " + playerChoice + " beats " + computerChoice);
        playerWins++;
    }else{
        console.log("You lost! " + computerChoice + " beats " + playerChoice);
        computerWins++;
    }
}

function playGame(){
    for(let i =0; i < 5; i++){
        getComputerChoice();
        getPlayerChoice();
        playRound(playerChoice,computerChoice);
    }
    console.log("Your wins: " + playerWins + "\nComputer Wins: " + computerWins);
}
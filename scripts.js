let computerChoice;
let playerChoice;
let playerWins;
let computerWins;

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
    console.log(computerChoice);
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getPlayerChoice(){
    playerChoice = prompt("Enter your choice: ");
    console.log("Player Choice: " + playerChoice);

}
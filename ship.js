const playBtn = document.querySelector("button");
playBtn.addEventListener('click', playerPlay);

function playerPlay(){
    let formInput = prompt('Please select between rock, paper, or scissors.');
    if (formInput == formInput.toLowerCase()) {
      return formInput;
    } else {
    let choice = formInput.toLowerCase();
    return choice;
    }
}

const buttons = ["rock", "paper", "scissors"];
function computerPlay() {
    var computerMove= buttons[Math.floor(Math.random() * buttons.length)];
   return computerMove;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie. No one wins.")
    }

    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You lost! paper beats rock.");
        } else {
            console.log("You won! rock beats scissors.")
        }
    }

    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("You won! scissors beats paper.")
        } else {
            console.log("You lost! rock beats scissors.")
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            console.log("You won! paper beats rock.")
        } else {
            console.log("You lost! scissors beat paper.")
        }
    }
}

function game() {
for(let i = 0; i<5; i++){ 
const playerSelection = playerPlay();
const computerSelection = computerPlay();
playRound(playerSelection,computerSelection)
} 
}

game();
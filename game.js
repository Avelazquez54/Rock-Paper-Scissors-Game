let userScore = 0;
let computerScore = 0;

const result = document.querySelector("#options");
const para = document.createElement("p");
const scores = document.createElement("p");
result.appendChild(para);

const btn = document.querySelector("#options");
btn.addEventListener("click", (event)=> {
let value = event.target;
let input = value.id;

const choice = input.toLowerCase();
let compChoice = getComputerChoice()

switch(choice){
    case 'rock':
        // console.log(choice);
        playRound(choice, compChoice);
        break;
    case 'paper':
        // console.log(choice);
        playRound(choice, compChoice);
        break;
    case 'scissors':
        // console.log(choice);
        playRound(choice, compChoice);
        break;
    }
});

function playRound(userInput, computerChoice) {
    // const result = document.querySelector("#options");
    // const para = document.createElement("p");
    // const scores = document.createElement("p");
    // result.appendChild(para);

    if (userInput === "rock" && computerChoice === "paper"){
        para.textContent = "Somehow, their paper stopped your rock. You lost this round.";
        computerScore++;
    } else if (userInput === "paper" && computerChoice === "rock"){
        para.textContent = "You stopped their advance with your handy-dandy paper. You win this round!";
        userScore++;
    } else if (userInput === "rock" && computerChoice === "scissors"){
        para.textContent = "You shattered their blade with that rock. You win this round!";
        userScore++;
    } else if (userInput === "scissors" && computerChoice === "rock"){
        para.textContent = "A dull blade won't cut through this rock. You lost this round.";
        computerScore++;
    } else if (userInput === "paper" && computerChoice === "scissors"){
        para.textContent = "You got sliced and diced mate! You lost this round.";
        computerScore++;
    } else if (userInput === "scissors" && computerChoice === "paper"){
        para.textContent = "You tore that paper up, mate! You won this round.";
        userScore++;
    } else if (userInput === computerChoice){
        para.textContent = "Both went for the same thing... whelp who could've guessed that. Go again!";
    }
    let user = "Results: User = " + userScore + "; Computer = " + computerScore;
    scores.textContent = user;
    result.appendChild(scores);
    isGameOver();
}

// Game checks if 
function isGameOver(){
    if (userScore === 5) {
        alert("CONGRATULATIONS! You demolished that game mate. The game will now restart.");
        userScore = 0;
        computerScore = 0;
        para.textContent = "";
        scores.textContent = "";
        return;
    } else if(computerScore === 5) {
        alert("Unfortunately, you lost this game mate. The game will now restart.");
        userScore = 0;
        computerScore = 0;
        para.textContent = "";
        scores.textContent = "";
        return;
    }
};

// Generated random value for A.I./computer to assign it rock, paper, or scissor:
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3)+1;
    // console.log(randomNumber);
    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else {
        return "scissors";
    }
};

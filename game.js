// Here we compare the userInput and computerChoice to declare the winner of the round and award points based
// based on the logic set forth and update the results displayed on screen. We also call a function called
// isGameOver() to see if either players reach a score of 5 to declare a winner.
function playRound(userInput, computerChoice) {
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
};

// Game checks if either the user or the computer have reached 5 points. If either condition is met,
// We display a results message and ask the user if the they would like to restart the game.
function isGameOver(){
    if (userScore === 5) {
        winner.textContent = "CONGRATULATIONS! You demolished that game mate.";
        restart.style.display = "inline";
        return;
    } else if(computerScore === 5) {
        winner.textContent = "Unfortunately, you lost this game mate :(. ";
        restart.style.display = "inline";
        return;
    }
};

// We call this function when the user wants to restart the game, to which get rid of the results message 
// and reset the scores to start a new game
function restartGame(){
    restart.style.display = "none";
    userScore = 0;
    computerScore = 0;
    para.textContent = "";
    scores.textContent = "";
    winner.textContent = "";
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


// Set the initial scores of the game so that we can update as the game is played.
let userScore = 0;
let computerScore = 0;

// We select and create elements so that we may display and update the round results to the user
// as they play the game as well as display a message for if they want to continue playing after
// finishing.
const result = document.querySelector("#options");
const para = document.createElement("p");
const scores = document.createElement("p");
const winner = document.createElement("p");
result.appendChild(para);
result.appendChild(winner);

const restart = document.querySelector("#Restart");
restart.style.display = "none";

let myWindow = "./index.html";

// Here we have an eventListener() function establish to listen and pass on the user's button
// choice when clicked.
const btn = document.querySelector("#options");
btn.addEventListener("click", (event)=> {
let value = event.target;
let input = value.id;

const choice = input.toLowerCase();
let compChoice = getComputerChoice();

// case where we reached a conclusion to the game, and the user wants press any of the
//  buttons.
if (userScore === 5 || computerScore === 5){
    return;
}

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

// Here we have an eventListener() function established to the buttons options that are
// active after the user finishes a game.
const option = document.querySelector("#choice");
option.addEventListener("click", (event) => {
    const value = event.target;
    console.log(value);
    const input = value.id;

    const choice = input.toLowerCase();

    switch(choice) {
        case 'confirm':
            restartGame();
            break;
        case 'deny':
            break;
    }
});
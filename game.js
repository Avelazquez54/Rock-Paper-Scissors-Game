// console.log("Hello Gaming World!"); // Used to test if html file is connected to this .js file


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

// Prompts the user to enter either rock, paper, scissors and returns this value. 
// Repeats the cycle if the user doesn't enter one of these options.
function getUserChoice() {
    setTimeout(6000);
    let response = prompt("Please enter rock, paper, or scissors");
    let answer = response.toLowerCase();

    if (answer != "rock" && answer != "paper" && answer != "scissors"){
        while(answer != "rock" && answer != "paper" && answer != "scissors"){
            let choice = prompt("Please enter rock, paper, or scissors");
            answer = choice.toLowerCase();
        }
    }
    return answer;
}

// Function that sets up the game for the user to player the A.I that gets a random
function RockPaperScissors(playerScore, compScore){
    let counter = 5; // Best out of five games
    while(counter > 0){
        let computerChoice = getComputerChoice();
        // console.log("Computer gets:",computerChoice); // Used for debugging purposes.

        let playerChoice = getUserChoice();
        // console.log("Player chooses:",playerChoice); // Used for debugging purposes

    // Below are cases where depending on the choices of both the player and the computer
    // points are awarded and move to the next round.
    if (playerChoice === "rock" && computerChoice === "paper"){
        console.log("Somehow, their paper stopped your rock. You lost this round.");
        compScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock"){
        console.log("You stopped their advance with your handy-dandy paper. You win this round!");
        playerScore++;
    } else if (playerChoice === "rock" && computerChoice === "scissors"){
        console.log("You shattered their blade with that rock. You win this round!");
        playerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "rock"){
        console.log("A dull blade won't cut through this rock. You lost this round.");
        compScore++;
    } else if (playerChoice === "paper" && computerChoice === "scissors"){
        console.log("You got sliced and diced mate! You lost this round.");
        compScore++;
    } else if (playerChoice === "scissors" && computerChoice === "paper"){
        console.log("You tore that paper up, mate! You won this round.");
        playerScore++;
    } else if (playerChoice === computerChoice){
        console.log("Both went for the same thing... whelp who could've guessed that. Go again!");
        counter++;
    }
    counter--;
    // Display scores for the user to keep track off after every round
    console.log("Result: User =",playerScore, ". Computer = ", compScore); 

    if (compScore === 3 || playerScore === 3) { // Incase we get a decider victory early on. 
        break;
    }
    }
    // Compare the final scores and decide the winner!
    if (compScore > playerScore) {
        console.log("Unfortunately, you lost this game mate.");
    } else if (compScore < playerScore) {
        console.log("CONGRATULATIONS! You demolished that game mate.");
    } 
}

 let userScore = 0;
 let computerScore = 0;

 setTimeout(RockPaperScissors(userScore,computerScore), 3000);

function computerPlay() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    computer = getRandomInt(3);
    switch (computer) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "something went wrong";
    }

}

function playRound() {
    playerSelection = this.id;
    computerSelection = computerPlay();

    // //toUpperCase
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    //computer wins
    if ((computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER")
    ) {
        computerScore.textContent++;
    }
    //player wins 
    if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        playerScore.textContent++;
    }
    //winner
    if (playerScore.textContent == scoreToWin) {
        result.textContent = "You Won!";
    }
    if (computerScore.textContent == scoreToWin) {
        result.textContent = "You Lost!";
    }
}


const playerButtons = document.querySelectorAll('.playerSelection');
playerButtons.forEach(button => button.addEventListener('click', playRound));

const result = document.querySelector('.result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const scoreToWin = 5;

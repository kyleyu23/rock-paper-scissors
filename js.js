function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
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

function playRound(playerSelection, computerSelection) {

    //toUpperCase
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    //tie
    if (computerSelection === playerSelection) {
        return 0;
    }
    //computer wins
    if ((computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelection === "PAPER")
    ) {
        return 1;
    }
    //player wins 
    if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        return 2;
    }
}

function game() {
    // playerScore = 0, computerScore = 0;
    let scores = {
        player: 0,
        computer: 0,
    };

    for (let rounds = 0; rounds < 5; rounds++) {

        playerSelection = getPlayerSelection();

        roundResult = playRound(playerSelection, computerPlay());

        scores = calcScore(roundResult, scores);

        displayRoundResult(roundResult);

    }
    return;
}

function getPlayerSelection() {
    return prompt("rock, paper, or scissors?");
    // return "rock";
}

/** 
 * @param {Number!} result
 * @param {{player: Number!, computer: Number!}!} scores State containing the scores
 * @return {{player: Number!, computer: Number!}!}
 */
function calcScore(result, scores) {
    let computerScore = scores.computer;
    let playerScore = scores.player;
    switch (result) {
        case 0:
            break;
        case 1:
            computerScore++;
            break;
        case 2:
            playerScore++;
            break;
        default:
            throw new Error("something went wrong");
    }
    return { player: playerScore, computer: computerScore };
}

function getRoundMessage(result) {

    switch (result) {
        case 0:
            return "Tie";
        case 1:
            return "Computer Wins";
        case 2:
            return "Player Wins";
        default:
            return "something went wrong";
    }
}

function displayRoundResult(result) {
    console.log(getRoundMessage(result));
}

function displayScore(playerScore, computerScore) {
    console.log(`Player: "${playerScore}" Computer: "${computerScore}"`);
}

// let playerScore, computerScore;


// Rock -> 0
// Paper -> 1
// Scissors -> 2

// a, b
// 0, 0 -> tie
// 0, 1 -> b wins
// 0, 2 -> a wins
// 1, 0 -> 
// 1, 1 -> tie
// 1, 2 -> 
// 2, 0 -> 
// 2, 1 -> 
// 2, 2 -> tie

// // a equals b?
// a === b --> ties
// // b is the sucessor of a
// (a + 1) % 3 === b --> b wins
// // a is the sucessor of b
// (b + 1) % 3 === a --> a wins


// class Game {
//     computerScore = 0;
//     playerScore = 0;

//     play() {
//         for (let rounds = 0; rounds < 5; rounds++) {
//             playerSelection = this.getPlayerSelection();
//             roundResult = playRound(playerSelection, computerPlay());
//             scores = calcScore(roundResult, scores);
//             displayRoundResult(roundResult);
//         }
//     }

//     getPlayerSelection() {
//         return "rock";
//     }

//     playRound(playerSelection, computerSelection) {

//     }

//     /** 
//      * @param {Number!} result
//      * @return {void}
//      */
//     updateScore(result) {
//         switch (result) {
//             case 0:
//                 break;
//             case 1:
//                 this.computerScore++;
//                 break;
//             case 2:
//                 this.playerScore++;
//                 break;
//             default:
//                 throw new Error("something went wrong");
//         }
//     }
// }

// const game = new Game();
// game.play();
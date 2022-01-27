/*
Script for a console-player rock paper scissors game
*/

let score = 0;

function computerPlay() {
    let action = ['Rock', 'Paper', 'Scissors'];
    return action[Math.floor(Math.random() * action.length)];
}

function playRound(playerSelection, computerSelection) {
    //Convert each input to lower case
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //Handle case for draws (same selection)
    if (playerSelection === computerSelection) {
        console.log(`Draw! ${playerSelection} draws with ${computerSelection}`);
        return 0; 
    }
    
    //Losing cases
    else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")  
    ) {

        console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
        return -1;
    }

    //Winning cases
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")  
    ) {
        console.log(`You win! ${playerSelection} loses to ${computerSelection}`);
        return 1;
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelect = prompt('Rock, paper or scissors?');
        const computerSelect = computerPlay();

        result = playRound(playerSelect, computerSelect);
        console.log(`Result is: ${result}`);
        switch(result) {
            case -1:
                score--;
                break;
            case 1:
                score++;
                break;
        }
    }
    console.log(`Final score is: ${score}`);
}

game();


function getComputerChoice(){
    let compAnswer = Math.floor(Math.random() * 3) + 1;

    if (compAnswer === 1) {
        return "rock";
    } else if (compAnswer === 2) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    p = playerSelection.toLowerCase();
    c = computerSelection.toLowerCase();

    if (p === c) {
        console.log("It's a tie!")
        return "tie";
    } else if (p === "rock") {
        if (c === "paper") {
            console.log("You lose! Paper beats rock.")
            return "player loses";
        } else { //scissors
            console.log("You win! Rock beats scissors.")
            return "player wins";
        }
    } else if (p === "paper") {
        if (c === "scissors") {
            console.log("You lose! Scissors beat paper.")
            return "player loses";
        } else { //rock
            console.log("You win! Paper beats rock.")
            return "player wins";
        }
    } else if (p === "scissors") {
        if (c === "rock") {
            console.log("You lose! Rock beats scissors.")
            return "player loses";
        } else { //paper
            console.log("You win! Scissors beat paper.")
            return "player wins";
        }
    } else {
        return "not a valid entry";
    }
}

function game() {
    let p = 0;
    let c = 0;

    while (p < 5 && c < 5) {
        const ps = prompt("Rock, Paper, or Scissors?");
        const cs = getComputerChoice();

        play = playRound(ps, cs);

        switch (play) {
            case "player loses":
                c += 1;
                break;
            case "player wins":
                p += 1;
                break;
            case "tie":
                p += 0;
                c += 0;
                break;
            default:
                console.log("Invalid selection. Please choose Rock, Paper or Scissors to play.");
        }
    }

    if (p !== c) {
        let winner = (p > c) ? true : false;

        if (winner) {
            return "You won the game " + p + " to " + c + "! Great job!" ;
        } else {
            return "You lost the game " + p + " to " + c + ". Better luck next time!";
        }
    } else if (c === 0) {
        return "Uh... I don't think you played the game right. Refresh the page and try that again."
    } else {
        return "Whoa, you tied! Refresh for a rematch!";
    }
}

console.log(game());
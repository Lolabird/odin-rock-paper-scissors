function getPlayerChoice(){
    let ps = prompt("Rock, Paper, or Scissors?")

    return ps;
}

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
        //console.log("It's a tie!")
        return "tie";
    } else if (p === "rock") {
        if (c === "paper") {
            return "player loses";
        } else { //scissors
            return "player wins";
        }
    } else if (p === "paper") {
        if (c === "scissors") {
            return "player loses";
        } else { //rock
            return "player wins";
        }
    } else if (p === "scissors") {
        if (c === "rock") {
            return "player loses";
        } else { //paper
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
        const ps = getPlayerChoice();
        const cs = getComputerChoice();

        play = playRound(ps, cs);

        switch (play) {
            case "player loses":
                c += 1;
                console.log("You lose!", cs, " beats", ps, ". You: ", p, "Computer: ", c);
                break;
            case "player wins":
                p += 1;
                console.log("You Win!", ps, " beats", cs, ". You: ", p, "Computer: ", c);
                break;
            case "tie":
                console.log("It's a tie!", " You: ", p, "Computer: ", c);
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
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
        if (c === "paper") {
            return "player loses";
        } else { //scissors
            return "player wins";
        }
    } else {
        return "not a valid entry";
    }
}

function game() {
    let p = 0;
    let c = 0;

    for (var i = 0; i < 5; i++) {
        const ps = prompt("Rock, Paper or Scissors?");
        const cs = getComputerChoice();

        play = playRound(ps, cs);

        switch (play) {
            case "player loses":
                c += 1;
                console.log("You lost!");
                break;
            case "player wins":
                p += 1;
                console.log("You won!");
                break;
            case "tie":
                p += 1;
                c += 1;
                console.log("It's a tie!");
                break;
            default:
                console.log("Invalid selection. Please choose Rock, Paper or Scissors to play.");
        }
    }

    console.log("Computer won " + c + " games");
    console.log("Player won " + p + " games");

        //playRound(playerSelection, computerSelection)

        //count how many times p and c have won 
    
    //return whether or not p has won

}

console.log(game());
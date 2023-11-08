
let pScore = 0;
let cScore = 0;
let ps; // Define the external variable for user's choice
const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        ps = button.id; // Assign the button's id to the external variable
        game(); // Start the game when the user makes a choice
    });
});


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
    if (pScore < 5 && cScore < 5) {
        const cs = getComputerChoice();

        play = playRound(ps, cs);

        switch (play) {
            case "player loses":
                cScore += 1;
                console.log("You lose!", cs, " beats", ps, ". You: ", pScore, "Computer: ", cScore);
                break;
            case "player wins":
                pScore += 1;
                console.log("You Win!", ps, " beats", cs, ". You: ", pScore, "Computer: ", cScore);
                break;
            case "tie":
                console.log("It's a tie!", " You: ", pScore, "Computer: ", cScore);
                break;
            default:
                console.log("Invalid selection. Please choose Rock, Paper or Scissors to play.");
        }
    }

    if (pScore === 5 || cScore === 5) {
        console.log(endGame()); 
    }
}


function endGame(){
    let winner = (pScore > cScore) ? true : false;

    if (winner) {
        return "You won the game " + pScore + " to " + cScore + "! Great job!" ;
    } else {
        return "You lost the game " + pScore + " to " + cScore + ". Better luck next time!";
    }

}
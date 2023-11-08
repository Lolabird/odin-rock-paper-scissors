
let pScore = 0;
let cScore = 0;
let ps; 
const buttons = document.querySelectorAll('button');
const msg = document.querySelector("#msg");
const score = document.querySelector("#score");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");


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
    }
}


function game() {
    if (pScore < 5 && cScore < 5) {
        const cs = getComputerChoice();

        play = playRound(ps, cs);

        switch (play) {
            case "player loses":
                cScore += 1;
                computer.textContent = cScore;
                msg.textContent = "You lose! " + cs + " beats " + ps;
                break;
            case "player wins":
                pScore += 1;
                player.textContent = pScore;
                msg.textContent = "You lose! " + ps + " beats " + cs;
                break;
            default:
                msg.textContent = "It's a tie! ";
                break;
        }
    }

    if (pScore === 5 || cScore === 5) {
        endGame(); 
    }
}


function endGame(){
    let winner = (pScore > cScore) ? true : false; 

    if (winner) {
        msg.textContent = "You won the game! Great job!";
    } else {
        msg.textContent = "You lost the game. Better luck next time!";
    }
}
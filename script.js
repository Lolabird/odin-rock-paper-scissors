
let pScore = 0;
let cScore = 0;
let ps; 
let count = 0;
const buttons = document.querySelectorAll('button');
const msg = document.querySelector("#msg");
const score = document.querySelector("#score");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const rounds = document.querySelector("#rounds");


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        ps = button.id; 
        game();
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
        const play = playRound(ps, cs);
        let psCap = ps.charAt(0).toUpperCase() + ps.slice(1);
        let csCap = cs.charAt(0).toUpperCase() + cs.slice(1);

        switch (play) {
            case "player loses":
                cScore ++;
                computer.textContent = cScore;
                msg.textContent = "You lose! " + csCap + " beats " + ps + ".";
                break;
            case "player wins":
                pScore ++;
                player.textContent = pScore;
                msg.textContent = "You win! " + psCap + " beats " + cs + ".";
                break;
            default:
                msg.textContent = "It's a tie! You both played " + cs + ".";
                break;
        }

        count ++;
        rounds.textContent = count;
    }

    if (pScore === 5 || cScore === 5) {
        endGame(); 
    }
}


function endGame() {
    let winner = (pScore > cScore) ? true : false; 
    const newGame = document.createElement("button");
    const newDiv = document.createElement("div");

    if (winner) {
        msg.textContent = "You won the game! Great job!";
    } else {
        msg.textContent = "You lost the game. Better luck next time!";
    }

    newGame.textContent = "Play Again?";
    newGame.classList.add("button");
    newGame.addEventListener("click", resetGame);
    newDiv.appendChild(newGame);
    msg.appendChild(newDiv);
}

function resetGame() {
    pScore = 0;
    cScore = 0;
    count = 0;
    player.textContent = "0";
    computer.textContent = "0";
    msg.textContent = "";
    rounds.textContent = "0";
}
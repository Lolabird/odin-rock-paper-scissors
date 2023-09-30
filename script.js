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
            return "player wins"
        }
     } else if (p === "paper") {
        if (c === "scissors") {
            return "player loses";
        } else { //rock
            return "player wins"
        }
     } else if (p === "scissors") {
            if (c === "paper") {
                return "player loses";
            } else { //scissors
                return "player wins"
            }
     } else {
        return "not a valid entry"
     }
       
    //else if p === "paper"
        //if c === "scissors" player loses
        //if c === "rock" player wins
    //else if p === scissors
        //if c === "rock" player loses
        //if c === "paper" player wins
    // else
        //Not a valid entry
}

function game(playerSelection, computerSelection) {
    // for (var i = 0; i < 5; i++)
        //playRound(playerSelection, computerSelection)

        //count how many times p and c have won 
    
    //return whether or not p has won

}

const ps = prompt("Rock, Paper or Scissors?"); //need to make sure only one of those three options are chosen
const cs = getComputerChoice();

//console.log(game(ps, cs))
console.log(playRound(ps, cs));
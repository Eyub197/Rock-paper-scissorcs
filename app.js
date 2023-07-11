const choice = ["rock", "paper", "scissors"]
let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase

let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * choice.length) 
    let computerChoice = choice[randomIndex]
    return computerChoice
}


let rules = (computerChoice = getComputerChoice() , plChoice = playerChoice) => {
    let winner
    if(
    (computerChoice === "rock" && plChoice === "scissors") || 
    (computerChoice === "paper" &&  plChoice === "rock")   ||
    (computerChoice === "scissors" && plChoice === "paper")){
    winner = "computer"
    return `You lost`
    } else if (computerChoice === plChoice){
        winner = "Tie"
        return "Tie"
    }else{
        winner = "You"
        return "you win"

    }
}


const choice = ["rock", "paper", "scissors"]
let playerChoice = prompt("Choose rock, paper or scissors").toLowerCase

let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * choice.length) 
    let computerChoice = choice[randomIndex]
    return computerChoice
}


let rules = (computerChoice = getComputerChoice() , plChoice = playerChoice) => {
    let message
    if(
    (computerChoice === "rock" && plChoice === "scissors") || 
    (computerChoice === "paper" &&  plChoice === "rock")   ||
    (computerChoice === "scissors" && plChoice === "paper")){
        message = "You lost"
    } else if (computerChoice === plChoice){
        message = "Tie"
    }else{
        message = "You win"
    }
    return message
}

let determinateWinner = (computerChoice = getComputerChoice, plChoice = playerChoice) => {
    let result = rules(computerChoice, plChoice)
    let winner
    if(result = "You lost"){
        winner = "computer"
    }else if (result = "Tie"){
         winner = "tie"}
    else{
        winner = "you"}
    return winner
}


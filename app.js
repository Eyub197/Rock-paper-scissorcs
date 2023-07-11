const choice = ["rock", "paper", "scissors"]

let getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * choice.length) 
    let computerChoice = choice[randomIndex]
    alert(computerChoice)
}


let rules = (computerChoice , playerChoice) => {

}

getComputerChoice()
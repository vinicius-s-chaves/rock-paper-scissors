let humanScore = 0
let computerScore = 0

function getHumanChoice(humanChoice) {
    let choice = prompt('What\'s your move? \nRock (rock), Paper (paper) or Scissors (scissors)?')
    return choice
}
console.log(getHumanChoice())

function getComputerChoice(computerChoice) {
    let choice = (Math.random().toFixed(3)) * 100

    if (choice <= 33.3) {
        return 'rock'

    } else if (choice > 33.3 && choice <= 66.6) {
        return 'paper'

    } else {
        return 'scissors'

    }
}
console.log(getComputerChoice())
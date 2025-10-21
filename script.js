let humanScore = 0
let computerScore = 0

function getHumanChoice(humanMove) {
    let moveChoice = prompt('What\'s your move? \nRock (rock), Paper (paper) or Scissors (scissors)?')
    return moveChoice
}


let getComputerChoice = function(computerMove) {
    let randomChoice = (Math.random().toFixed(3)) * 100

    if (randomChoice <= 33.3) {
        return 'rock'

    } else if (randomChoice > 33.3 && randomChoice <= 66.6) {
        return 'paper'

    } else {
        return 'scissors'

    }
}
getComputerChoice()
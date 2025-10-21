function getHumanChoice(humanMove) {
    let moveChoice = prompt('What\'s your move? \nRock (r), Paper (p) or Scissors (s)?')
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
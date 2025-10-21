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
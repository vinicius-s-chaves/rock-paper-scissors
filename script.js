let humanScore = 0
let computerScore = 0

function getHumanChoice(humanChoice) {
    let choice = prompt('What\'s your move? \nRock (rock), Paper (paper) or Scissors (scissors)?')
    return choice
}

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

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toUpperCase()
    computerChoice = getComputerChoice().toUpperCase()
    console.log(humanChoice, computerChoice)
    
    if (humanChoice === computerChoice) {
        return 'Draw! Both made the same play!'

    } else if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
        return 'You lose! Paper beats rock!'
        computerScore++

    } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        return 'You win! Rock beats scissors!'
        humanScore++

    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        return 'You win! Paper beats rock!'
        humanScore++

    } else if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        return 'You lose! Scissors beats paper!'
        computerScore++

    } else if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        return 'You lose! Rock beats scissors!'
        computerScore++

    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        return 'You win! Scissors beats paper!'
        humanScore++

    }

}
alert(playRound())
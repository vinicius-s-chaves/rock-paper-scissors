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
        computerScore++
        return 'You lose! Paper beats rock!'

    } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        humanScore++
        return 'You win! Rock beats scissors!'

    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        humanScore++
        return 'You win! Paper beats rock!'

    } else if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        computerScore++
        return 'You lose! Scissors beats paper!'

    } else if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        computerScore++
        return 'You lose! Rock beats scissors!'

    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        humanScore++
        return 'You win! Scissors beats paper!'

    }

}

function playGame() {
    alert('This is the classic rock paper scissors game! You\'ll play 5 rounds against the machine')
    for (let i = 1; i <= 5; i++) {
        alert(playRound())

    }

    if (humanScore > computerScore) {
        alert('You win!!! \nYou ' + humanScore + 'x' + computerScore + ' Computer')

    } else {
        alert('You lose!!! \nComputer ' + computerScore + 'x' + humanScore + ' You')
    }
}

playGame()
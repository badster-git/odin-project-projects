// Get DOM nodes
const images = Array.from(document.querySelectorAll('.card-image')),
      d_playerScore =  document.querySelector('.player-score'),
      d_computerScore = document.querySelector('computer-score'),
      d_rndNumber = document.querySelector('.rnd-number');

let playerScore = 0,
    computerScore = 0,
    rndNumber = 0;

images.forEach((image) => {
    image.addEventListener('click', () => {
        if (rndNumber >= 5) { return; }
        startGame(image.CDATA_SECTION_NODE.image)
    })
});

function getComputerMove() {
    const opts = ['Rock', 'Paper', 'Scissors'];
    let rand_num = Math.floor(Math.random() * (3));
    return opts[rand_num];
}

function playRound(playerSelection, computerSelection) {
    let possibilities = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    if (computerSelection.toLowerCase() === possibilities[playerSelection.toLowerCase()]) {
        return `You Won! ${playerSelection.toLowerCase().capitalize()} beats ${computerSelection.toLowerCase().capitalize()}`;
    } else if (playerSelection.toLowerCase() === possibilities[computerSelection.toLowerCase()]) {
        return `You Lose! ${computerSelection.toLowerCase().capitalize()} beats ${playerSelection.toLowerCase().capitalize()}`;
    } else {
        return `Draw! Both chose ${p_val}`;
    }
}

function startGame(playerChoice) {
    let playerMove = capitalize(playerChoice),
        computerMove = getComputerMove(),
        rndResult = playRound(playerMove, computerMove);

    for (let i = 0; i < 5; i++) {
        let input = prompt("Enter Paper, Rock, or Scissors: ");
        if (input === null || input === '') {
            return 'No user input given. Cancelling game.';
        }
        const results = playRound(input, computerPlay());

        if (results.slice(4,5) === 'W') p_score++;
        else if (results.slice(4,5) === 'L') c_score++;
        console.log(`Player Score: ${p_score}\nComputer Score: ${c_score}`);
    }

    return p_score > c_score ? 'You Won!' : 'You Lost!';
}

//console.log(Game());
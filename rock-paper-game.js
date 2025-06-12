let score = JSON.parse(localStorage.getItem('score'));

if(score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'scissors'){
        if(computerMove === 'rock')
        {
            result = 'You Lost.';
        }
        else if(computerMove === 'paper')
        {
            result = 'You Win.';
        }
        else if(computerMove === 'scissors')
        {
            result = 'Tie.';
        }
    }
    else if(playerMove === 'paper')
    {
        if(computerMove === 'rock')
        {
        result = 'You Win.';
        }
        else if(computerMove === 'paper')
        {
        result = 'Tie.';
        }
        else if(computerMove === 'scissors')
        {
        result = 'You Lost.';
        }
    }
    else if(playerMove === 'rock'){
        if(computerMove === 'rock')
        {
            result = 'Tie.';
        }
        else if(computerMove === 'paper')
        {
            result = 'You Lost.';
        }
        else if(computerMove === 'scissors')
        {
            result = 'You Win.';
        }
    }

    if (result === 'You Win.'){
        score.wins += 1;
    }
    else if(result === 'You Lost.'){
        score.losses += 1;
    }
    else if(result === 'Tie.'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector(".js-result").
        innerHTML = result;

    document.querySelector(".js-moves").innerHTML
        = `You
        <img class="image-class" src="images/${playerMove}-emoji.png">
        <img class="image-class" src="images/${computerMove}-emoji.png">
        Computer.`;
}

function updateScoreElement() {
    document.querySelector(".js-score")
    .innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove() {
    const value = Math.random();
    if(value >= 0 && value < 1/3)
    {
        computerMove = 'rock';
    }
    else if(value >= 1/3 && value < 2/3)
    {
        computerMove = 'paper';
    }
    else if(value >2/3 && value < 1)
    {
        computerMove = 'scissors';
    }

    return computerMove;
}

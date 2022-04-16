// TEST GAME

// Generaal variables

let currentScore, totalScore, dice, activePlayer, playGame;
startGame();

function startGame() {
    totalScore = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playGame = true;
    
    // Reset all settings
    document.querySelector('.totalScore-0').innerText = 0;
    document.querySelector('.totalScore-1').innerText = 0;
    document.querySelector('.currentScore-0').children[1].innerText = 0;
    document.querySelector('.currentScore-1').children[1].innerText = 0;


    document.querySelector('.name-0').innerText = 'Skóre 1. hráča';
    document.querySelector('.name-1').innerText = 'Skóre 2. hráča';

    document.querySelector('.player-0').classList.add('active');
    document.querySelector('.player-1').classList.remove('active');
};


// Hide cube
let diceElement = document.querySelector('.directImg');
diceElement.style.visibility = 'hidden';

let throwCube = document.querySelector('.throwCube');
throwCube.addEventListener('click', function(e){
    e.preventDefault();
    if(playGame) {
        // Random throw from 1 to 6
        dice = Math.ceil(Math.random() * 6);
        
        // Show cude
        diceElement.style.visibility = 'visible';

        // Set random THROW
        diceElement.src = `http://127.0.0.1:5501/assets/img/${dice}.jpg`;

        // Save currentScore
        currentScore = currentScore + dice;

        if( dice !== 1 ) {
            // Set currentScore
            document.querySelector('.currentScore-' + activePlayer).children[1].innerText = currentScore;
        }
        else {
            nextPlayer();
        }
    }
});

let holdScore = document.querySelector('.holdScore');
holdScore.addEventListener('click', function(e){
    e.preventDefault();
    if(playGame) {
        // Save TotalScore
        totalScore[activePlayer] = totalScore[activePlayer] + currentScore;

        // Set TotalScore
        document.querySelector('.totalScore-' + activePlayer).innerText = totalScore[activePlayer];

        if( totalScore[activePlayer] >= 20 ) {
            document.querySelector('.name-' + activePlayer).innerText = 'Winner';
            diceElement.style.visibility = 'hidden';
            playGame = false;
        }
        else {
            nextPlayer();
        }
    }
})

let newGame = document.querySelector('.newGame');
newGame.addEventListener('click', function(e){
    e.preventDefault();
    startGame();
});





function nextPlayer() {
    if( activePlayer == 0 ) {
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }

    currentScore = 0;
    document.querySelector('.currentScore-0').children[1].innerText = 0;
    document.querySelector('.currentScore-1').children[1].innerText = 0;

    diceElement.style.visibility = 'hidden';

    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');

}
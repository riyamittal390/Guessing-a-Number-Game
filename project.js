const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('.click');
const userInput = document.querySelector('.number');
const previousGuesses = document.querySelector('.box');
const remainingGuesses = document.querySelector('.remaining');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
} 

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    previousGuesses.innerHTML += `${guess}, `;
    numGuess++;
    remainingGuesses.innerHTML = `Guesses Remaining: ${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.randpm() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        previousGuesses.innerHTML = '';
        remainingGuesses.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}

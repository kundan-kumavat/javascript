const guessInput = document.querySelector('#guessInput')
const submitBtn = document.querySelector('#submit')
const guessLot = document.querySelector('.guessLot')
const remaining = document.querySelector('.guessNumber')
const lowOrHigh = document.querySelector('.lowOrhigh')
const startOver = document.querySelector('.startOver')

const p = document.createElement('p')

let randomNumber = parseInt(Math.random() * 100 + 1)

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submitBtn.addEventListener('click', function(e){
        e.preventDefault();

        let guess = parseInt(guessInput.value)
        
        if(guess){
            validateGuess(guess)
        }
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter a valid Number')
    } else if(guess < 0){
        alert('Number cannot be negative')
    } else if(guess > 100){
        alert('Number Should be less than 100')
    } else{
        prevGuess.push(guess);
        if (numGuess === 10){
            // displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guessed it right');
        endGame()
    }else if(guess < randomNumber){
        displayMessage('Number is low')
    } else if(guess > randomNumber){
        displayMessage('Number is high')
    }
}

function displayGuess(guess){
    guessInput.value = ''
    guessLot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<span>${message}</span>`
}

function endGame(){
    guessInput.value = '';
    guessInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start new game</h2>';
    p.style.cursor = 'pointer'
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessLot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        guessInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}
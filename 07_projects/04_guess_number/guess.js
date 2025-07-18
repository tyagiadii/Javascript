let randomNumber = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')                           //lowOrHi->low or high value
const startOver = document.querySelector('.resultParas')               


const p = document.createElement('p')

let prevGuess = []
let numGuess  = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click' ,function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
                                                

// isNaN - is a method to check whether it is a number or not

function validateGuess(guess) {
    if(isNaN(guess)){
        alert('please enter a valid number')
    } else if( guess < 1) {
        alert('please enter a number more than 1')
    } else if( guess > 100) {
        alert('please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess)
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
        displayMessage(`you guessed it right`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number is tooo low`)
    }else if (guess > randomNumber){
        displayMessage(`Number is tooo high`)
    }


}


function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`


}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}



function endGame(){
    userInput.vlaue = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame  = false;
    newGame();
    
}



function newGame(){
    const newGameButon = document.querySelector('#newGame')
    newGameButon.addEventListener('click' , function(e){
        randomNumber = (parseInt(Math.random() * 100 + 1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled ')
        startOver.removeChild(p);
        
        
        playGame = true
        
    })
}












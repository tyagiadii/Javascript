// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1)

// Get DOM elements
const submit = document.querySelector('#sumbt') // Button to submit guess
const userInput = document.querySelector('#guessField') // Input field for user's guess
const startOver = document.querySelector('.resultParas') // Container to show "start new game" button
const guessSlot = document.querySelector('.guesses') // Element to show previous guesses
const lowOrHi = document.querySelector('.lowOrHi') // Element to show feedback (low/high/correct)
const remaining = document.querySelector('.lastResult') // Element to show number of guesses left

// Create a paragraph element to later use for "Start New Game" button
const p = document.createElement('p')

// Store previous guesses and number of current guess
let prevGuess = []
let numGuess = 1

// Flag to control if game is currently active
let playGame = true

// If game is active, listen for submit button click
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault() // Prevent form from submitting
        const guess = parseInt(userInput.value) // Convert user input to number
        validateGuess(guess) // Call validation function
    })
}

// Validate the guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`please enter a valid number`) // If input is not a number
    } else if (guess < 1) {
        alert(`please enter a number more than 1`) // Too low
    } else if (guess > 100) {
        alert(`please enter a number less than 100`) // Too high
    } else {
        prevGuess.push(guess) // Add valid guess to history
        if (numGuess === 11) {
            displayGuess(guess) // Show guess
            displayMessage(`Game Over. Random Number was ${randomNumber}`) // Game over message
            endGame() // End the game
        } else {
            displayGuess(guess) // Show guess
            checkGuess(guess) // Check if it's correct or give hint
        }
    }
}

// Check if guess is correct or give a hint
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guess it right`) // Correct guess
        endGame() // End the game
    } else if (guess < randomNumber) {
        displayMessage(`Number is too low`) // Too low
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`) // Too high
    }
}

// Show user's guess and update remaining tries
function displayGuess(guess) {
    userInput.value = '' // Clear input field
    guessSlot.innerHTML += `${guess}  ` // Add guess to displayed history
    numGuess++ // Increment guess count
    remaining.innerHTML = `${11 - numGuess}` // Update remaining guesses
}

// Show message (e.g., too high, too low, correct)
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>` // Show message in lowOrHi section
}

// End the game by disabling input and showing restart option
function endGame() {
    userInput.value = '' // Clear input
    userInput.setAttribute('disabled', '') // Disable input field
    p.classList.add('button') // Add styling class to paragraph
    p.innerHTML = `<h2 id='newGame'>start new Game</h2>` // Add new game HTML
    startOver.appendChild(p) // Add paragraph to DOM
    playGame = false // Set game to inactive
    newGame() // Call function to allow restarting
}

// Handle starting a new game
function newGame() {
    const newGameButton = document.querySelector('#newGame') // Get new game button
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1) // Generate a new random number
        prevGuess = [] // Clear guess history
        numGuess = 1 // Reset guess count
        guessSlot.innerHTML = '' // Clear guess display
        remaining.innerHTML = `${11 - numGuess}` // Reset remaining guesses display
        userInput.removeAttribute('disabled') // Enable input field
        startOver.removeChild(p) // Remove the "Start New Game" button
        playGame = true // Set game back to active
    })
}

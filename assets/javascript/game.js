//this is to keep track of all my variables        
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var lettersToGuess = null;
var letters = ["a", "b", "c"];

// these are my functions
var updateGuesses = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterGuess = function() {
    lettersToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateSoFar = function() {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");
};


// keeping track of keyboard clicks
document.onkeydown = function(event) {
    guessesLeft--;
// make sure all entries are registered as lowercase letters
    var letter = event.key.toLowerCase();
// this will send it to our array of 3 letters
    guessedLetters.push(letter);

    updateLetterGuess();
    updateSoFar();

    // if else statements for finding the guessed letter
    if (letter === lettersToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;

        reset();
    }
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        reset();
    }
};

// reset my game
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    updateGuesses();
    updateLetterGuess();
    updateSoFar();
};

updateGuesses();
updateLetterGuess();


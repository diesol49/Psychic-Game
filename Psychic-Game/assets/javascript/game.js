//this is to keep track of all my variables        
var wins = 0;
var losses = 0;
var guessesLeft;
var guessedLetters;
var lettersLeft;
var userChoice = ['a', 'b', 'c', 'd ', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerChoice = ['a', 'b', 'c', 'd ', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//this is my function that recognizes the user's choice & the CPU's
document.onkeypress=function(event){
    
    var userGuess = event.key;
    console.log(event.key);
    //is-else statements to win the game. The code I had in before would just not work and I did not understand why.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoice.length)];
        if (userGuess ===lettersLeft){
            win();
        } else {
            fail()
        }
};

//my function to display the results. Should refer back to my paragraph id's in my HTML
function display() {
    var wins = document.getElementById("wins");
    var losses = document.getElementById("losses");
    var guessesLeft = document.getElementById("guesses-left");
    var guessedLetters = document.getElementById("guessed-letters")
    wins.innerHTML = wins;
    losses.innerHTML = losses;
    guessesLeft.innerHTML = guessesLeft;
    guessedLetters.innerHTML = "," + guessedLetters;
};



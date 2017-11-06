var inquirer = require("inquirer");
var Game = require("./game.js");
var hangmanGame = new Game();

var guessesRemaining = 10;

playHangman(guessesRemaining);


function playHangman(attemptsLeft){
    console.log("Guess remaining: " + attemptsLeft);

    if(hangmanGame.currentWord.compare() == true){
        console.log("You guessed: " + hangmanGame.currentWord.computerWord);   
        console.log("CHICKEN DINNER FOR THE WINNER!");
        return;

        if(guessesRemaining > 0){
            guessesRemaining = 10;     
            playHangman(attemptsLeft);
            console.log("hello")
        }
    }

    if(attemptsLeft <= 0){
        console.log("Game Over! Ya lost!");
        return;
    }

    console.log(hangmanGame.currentWord.display());

    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "guess a letter: "

        }
    ]).then(function(answer){

      

        // console.log(answer.guess)
        if(hangmanGame.currentWord.letterFound(answer.guess) == false){
            console.log("wrong guess")
            attemptsLeft--;
        }
        playHangman(attemptsLeft)

    });
}
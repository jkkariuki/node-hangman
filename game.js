//game.js file will be responsible for selecting the random word that user will attempt to guess

var Word = require("./word.js");

var Game = function(){
    //words to be chosen at random for the user to guess.
    this.gameWords = ["orange", "grape", "apple","banana", "mango"];

    //a Game property that allows the game to select a random word from the gameWords array.
    this.computerWord = this.gameWords[Math.floor(Math.random()* this.gameWords.length)];

    this.currentWord = new Word(this.computerWord);
}
    var hangMan = new Game();
    console.log(hangMan.currentWord)

module.exports = Game;
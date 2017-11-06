var Letter = require('./letter.js');

var Word = function(computerWord){
    this.computerWord = computerWord;
    this.wordsLetters = [];
    this.guessedCorrect = false;
    this.lettersAttempted = [];

    this.getLetters = function(){
        for(var i = 0; i < this.computerWord.length; i++){
            var letter = new Letter(this.computerWord.charAt(i));
            this.wordsLetters.push(letter); 
        }
    }

    this.getLetters();

    this.letterFound = function(userGuess){
        for(var i = 0; i < this.lettersAttempted.length; i++){
            if(userGuess === this.lettersAttempted[i]){
                return true;
            }
        }
        console.log(userGuess);
        var pushed = false;

        this.lettersAttempted.push(userGuess);

        for(var i = 0; i < this.wordsLetters.length; i++){
            if(this.wordsLetters[i].matchCheck(userGuess)){
                this.wordsLetters[i].letterShowing = true;
                
                pushed = true;
            }
        }

        if(!pushed){
            console.log("wrong try again");
        }
        return pushed;
    }

    this.compare = function(){
        for(var i = 0; i < this.computerWord.length; i++){

            if(this.computerWord.charAt(i) != this.wordsLetters[i].letterSpace){
                return false
            }
        }
        return true
    }

    this.display = function(){
        var letterContainer = "";
        for(var i= 0; i < this.wordsLetters.length; i++){
            letterContainer += this.wordsLetters[i].letterSpace + " ";
        }

        return letterContainer
    }

}

var man = new Word("man");
console.log(man.wordsLetters[1].matchCheck())

module.exports = Word;
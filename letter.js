var Letter = function(ltr){

    this.letterSpace = "_";
    this.ltr = ltr;
    this.letterShowing = false;
    this.matchCheck = function(userGuess){
        if(this.ltr == userGuess){
            this.letterSpace = this.ltr;
            return true;
        }
        return false;
    }

    this.currentState = function(){
        return this.letterSpace;
    }
}
 
module.exports = Letter;
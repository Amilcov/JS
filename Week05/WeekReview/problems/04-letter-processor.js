/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterRoom` class found in the `./problems/03-letter-room.js` file.


The final class is called `LetterProcessor`. `LetterProcessor` should be
initialized with a maximum amount of letters in can add in a bin,
`maxLettersPerBin`. Each instance should have its own `LetterRoom`. Implement
the method to add a letter to last `LetterBin` added to its `LetterRoom`. The
letter should be added to the top of that `LetterBin`'s stack.
Implement the method to remove a letter from the first `LetterBin` added to
`LetterProcessor`'s `LetterRoom`. The letter should be removed from the top of
that `LetterBin`'s stack.

******************************************/

const LetterRoom = require("./03-letter-room");
const Letter = require("./letter");

class LetterProcessor {
    constructor(maxLettersPerBin) {
        this.letterRoom = new LetterRoom();
        this.maxLettersPerBin = maxLettersPerBin;
    }

    addLetter(message) {
        // add a letter with the specified message to the last bin added to the letter room
        // if the last bin added is full, add a new bin to the letter room
        
        // Fill this in

        const letter = new Letter(message);

       let bin; 
       if (this.letterRoom.numBins() === 0) {
            bin = this.letterRoom.addBin();
        }
       
        bin = this.letterRoom.getLastBin();
        
       
        bin.addLetter(letter);
  

        if (bin.numLetters() ===  this.maxLettersPerBin) {
            this.letterRoom.addBin();
        }


    }

    removeLetter() {
        // remove a letter from the first bin added to the letter room
        // if the first bin is empty after removing the letter, remove the bin from the letter room
        // if there are no more letters, then console.log 'No more letters to process!'
        
        // Fill this in

        let bin, letter;

        if (this.letterRoom.numBins() === 0) {
            console.log('No more letters to process!');
            return;
        }

        //letterProcessor.letterRoom.getFirstBin().removeLetter()
        bin = this.letterRoom.getFirstBin();
        letter = bin.removeLetter();
        if (bin.numLetters() === 0) { 
           this.letterRoom.removeBin();
        }
        return letter;
    }
}

module.exports = LetterProcessor;






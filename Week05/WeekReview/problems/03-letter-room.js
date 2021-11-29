/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterBin` class found in the `./problems/02-letter-bin.js` file.


The second class is called `LetterRoom`. `LetterRoom` should hold a queue of
`LetterBin`'s. There are methods on the class to add and remove a bin from the
queue. There are also methods to get the first and last bin in the queue without
removing them. Finally, there's a method to get the total number of bins in the
queue. Implement these methods.

******************************************/




const LetterBin = require('./02-letter-bin');
const Letter = require('./letter');



class LetterRoom {
    constructor() {
        // create an empty queue
        // Hint: you may create helper classes in this file to use
        
        // Fill this in
        this.head = [];
        this.length = 0;
    }

    getLastBin() {
        // return the last bin added to the queue
        // if there are no bins in the queue, return null
        
        // Fill this in
        if (this.length === 0) {
            return null;
        }

        return this.head[this.length - 1];

    }

    getFirstBin() {
        // return the first bin added to the queue
        // if there are no bins in the queue, return null
        
        // Fill this in
        if (this.length === 0) {
            return null;
        }
      
        return this.head[0];
    }

    numBins() {
        // returns the number of bins in the queue
        
        // Fill this in
        return this.length;
    }

    addBin() {
        // create a new bin and add it to the end of the queue
        // returns the newly created bin
        // WARNING: you cannot add properties to a LetterBin like .next
        
        // Fill this in
        const bin = new LetterBin();
      
        this.head.push(bin);
        this.length++;

        return bin;
    }

    removeBin() {
        // remove the bin at the beginning of the queue
        // returns the removed bin
        
        // Fill this in
        if (this.length === 0) {
            return null;
        }
        
        const bin = this.head.shift();
        this.length--;

        return bin;
    }
}

module.exports = LetterRoom;

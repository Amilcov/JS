 const {Room} = require('./room');
 const {Item} = require('./item');
 const {Food} = require('./food');

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        // Fill this in
        let item = this.currentRoom.getItemByName(itemName);
        let idxItem =  this.currentRoom.items.indexOf(item); 
        if (idxItem>=0) {
            this.items.push(item);
            this.currentRoom.items.splice(idxItem, 1);
        }            
          
    }

    dropItem(itemName) {
        // Fill this in
        let idxItem = this.items.map(item => item.name).indexOf(itemName);
        let item = this.getItemByName(itemName);
             //console.log(`-----------------dropitem----- ${idxItem}`)
        this.currentRoom.items.push(item);
        this.items.splice(idxItem, 1);
    }

    eatItem(itemName) {
        // Fill this in
        let idxItem = this.items.map(item => item.name).indexOf(itemName);

        if (this.items[idxItem].isFood) {
            this.items.splice(idxItem, 1);
        } else {
           console.log(`The item ${itemName} is not eatable`);
        } 


    }

    getItemByName(name) {
        // Fill this in
        let idxItem = this.items.map(item => item.name).indexOf(name);
        return this.items[idxItem];
    }
}

module.exports = {
  Player,
};

const {Item} = require('./item');

class Room {

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.exits = {};
        this.items = [];
    }

    printRoom() {
        //console.clear();
        console.log("");
        console.log(this.name);
        console.log("");
        console.log(this.description);
        console.log("");
        if (this.items.length > 0) {
            console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
        }
        console.log(this.getExitsString());
        console.log("");
    }

    getExits() {
        return Object.keys(this.exits);
    }

    getExitsString() {
        return `Exits: ${this.getExits().join(", ")}`
    }

    connectRooms(direction, connectingRoom) {

        // Check if the direction and connecting room are valid
        if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
            throw new Error("Error: Invalid room connection");
        }

        this.exits[direction] = connectingRoom;
    }

    getRoomInDirection(direction) {
        return this.exits[direction];
    }

    getItemByName(name) {
        // Fill this in
        return this.items.filter(item => item.name === name)[0];
    }

}

module.exports = {
  Room,
};


    // const rock = new Item('rock1','rock for building', 3);
    // console.log(rock);

    // let roomIntersection = new Room('roomIntersection', 'room is situated in intersection');
    // let roomNorth = new Room('roomNorth', 'room is situated in north');
//console.log(roomNorth);
    //roomNorth.connectRooms('s', 1)

//console.log(roomNorth);
//    roomNorth.items.push(rock);
//    let itemInRoom = roomNorth.getItemByName('rock1');
//    console.log(itemInRoom);
// console.log(roomNorth);
    //console.log(roomNorth.getRoomInDirection('s'));
// console.log(roomNorth.getExits());
// console.log(roomNorth.getExitsString());

// console.log('_______start print');
//console.log(roomNorth.printRoom());
//console.log(roomNorth.getItemByName('rock1'));

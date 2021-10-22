class Computer {
    constructor(price, yearBuild) {
        this.price = price;
        this.yearBuild = yearBuild;
    }

    powerOn(){
        console.log(`The computer has been booted up`);
    }

}


module.exports = Computer;
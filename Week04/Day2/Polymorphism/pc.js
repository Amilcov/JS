const Computer = require('./computer.js');

class PC extends Computer {

    constructor(price, yearBuild, windowsVersion) {
        super(price, yearBuild);
        this.windowsVersion = windowsVersion;
    }

    powerOn(){
        console.log(`The PC has booted up Windows ${this.windowsVersion}`);
    }

}


let computer1 = new Computer(2000, 2021, 11);
computer1.powerOn();
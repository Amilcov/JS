const Computer = require('./computer.js');

class Mac extends Computer {
  constructor(price, yearBuild, macVersion) {
        super(price, yearBuild);
        this.macVersion = macVersion;
    }

    powerOn(){
        console.log(`The Mac has booted up Mac ${this.macVersion}`);
    }
}

let myMac = new Mac(2500, 2021, 'Mojave (v 10)');
myMac.powerOn();
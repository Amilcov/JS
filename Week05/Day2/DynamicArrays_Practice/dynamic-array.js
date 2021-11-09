class DynamicArray {

  constructor(defaultSize=4) {

    // Fill this out
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);


  }

  read(index) {

    // Fill this out
    // You may not use any built-in JS array functions
    return this.data[index];
  }

  unshift(val) {

    // Fill this out
    // You may not use any built-in JS array functions
    for (let i = 0; i < this.length; i++) {
        this.data[this.length - i] = this.data[this.length - i - 1]
    }

    this.data[0] = val;
    this.length++;
      
  }

}


module.exports = DynamicArray;

class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here

    // Read specs for details
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;


  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    this.resize();
    this.data[this.length] = val;
    this.length++;
  }


  pop() {

    // Your code here
    this.length--;
    return this.data[this.length];
   
  }

  shift() {

    // Your code here
    let elem =this.data[0];

    for (let i = 1; i < this.length; i++) {
        this.data[i - 1] = this.data[i];
    }
    this.length--;

    return elem;
  }

  unshift(val) {

    
    // Your code here
    this.resize();
    for (let i = this.length - 1; i >= 0; i--) {
         this.data[i + 1] = this.data[i];
    }
    this.data[0] = val;
    this.length++;
    
  }

  indexOf (val) {

    // Your code here
   for (let i = 0; i < this.length; i++) {
        if (this.data[i] === val) {
          return i;
        };
    }
    return -1;
  }

  resize () {

    if (this.length === this.capacity) {
        let newCapacity = 2 * this.capacity;
        let newArray = new Array(newCapacity);

        for (let i = 0; i < this.length; i++) {
            newArray[i] === this.data[i];
        }
        
        for (let i = 0; i < newArray.length; i++) {
            this.data[i] === newArray[i];
        }
        //this.data = newArray;
        this.capacity = newCapacity;
    }

  }
}     

module.exports = DynamicArray;




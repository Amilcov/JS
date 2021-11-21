const sha256 = require('js-sha256');

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
   
    // fill this in
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
    this.count = 0;
  }

  hash(key) {
    // fill this in
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
        sum += key.charCodeAt(i);
    }
    return sum;
  }

  hashMod(key) {
    // fill this in
    let sum = this.hash(key);
    let bucket = sum % this.data.length;
    return bucket
  }

  insert(key, value) {
    // fill this in
    let newNode = new KeyValuePair(key, value);
    let bucket = this.hashMod(key);

    if(this.data[bucket] === null) {
      this.data[bucket] = newNode;
    } else {
      newNode.next = this.data[bucket];
      this.data[bucket] = newNode;
    }
  }

}


module.exports = HashTable;

let hashTable = new HashTable(10);
console.log(` test hash(A): ${hashTable.hash('A')}`);
console.log(` test hash(B): ${hashTable.hash('B')}`);
console.log(` test hash(C): ${hashTable.hash('C')}`);

hashTable.insert('A', 'val_A');
hashTable.insert('B', 'val_B');
hashTable.insert('C', 'val_C');
hashTable.insert('AD', 'val_AD');
hashTable.insert('BC', 'val_BC');


console.log(hashTable.data)
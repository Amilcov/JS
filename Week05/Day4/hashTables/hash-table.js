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
    this.count = 0;
    this.capacity = numBuckets;
  }

  hash(key) {
    // fill this in
    let resultDec = 0;
    let hexLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

    let resultHex = sha256(key);
    resultHex = resultHex.slice(0, 8);

    for (let i = 0; i < 8; i++) {
        let elem = resultHex[i];

        let value = 10 + hexLetters.indexOf(elem);
        if (value < 10) {
            value = parseInt(elem);
        }

        resultDec = resultDec + value * Math.pow(16, 7 - i);

    }

    return resultDec;

  }

  hashMod(key) {
    // fill this in
    const bucket = this.hash(key) % this.data.length;
    return bucket;
  }

  insert(key, value) {
    // fill this in
    const node = new KeyValuePair (key, value);
    const bucket = this.hashMod(key);

    if (this.data[bucket] === null) {
        this.data[bucket] = node;
    } else {
      let crt = this.data[bucket];
      node.next = crt;
      this.data[bucket] = node;
    }
        
    this.count++;
  }

}


module.exports = HashTable;


 const cashTable = new HashTable(2);
 //let r = sha256("A", 2);
 //console.log(r);

  //console.log(cashTable.hash("A"));
   const hashTable = new HashTable(2);
      hashTable.insert("key-1", "val-1");
    hashTable.insert("key-2", "val-2");
     hashTable.insert("key-3", "val-3");

    console.log(hashTable.count)
      console.log(hashTable.capacity)

      console.log(hashTable.data )
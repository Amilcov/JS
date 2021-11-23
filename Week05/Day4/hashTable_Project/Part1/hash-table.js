// Use these to store the key/value pairs in your hash table
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), delete O(1)

  constructor(numBuckets = 2) {
    // Initialize your buckets here
    this.capacity = numBuckets;
    this.count = 0;
    this.data = new Array(numBuckets).fill(null);

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
         hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  read(key) {
    // Fill this in
    let bucket = this.hashMod(key);
    let crt = this.data[bucket];
        
    if (crt === null) {
        return null;
    }

    while (key !== crt.key) {

       if (crt.next === null) {
          return null;
       } else {
          crt = crt.next;
       }
     
    }
     
  
    return crt.value;
  }


  insert(key, value) {

    // Fill this in
    let newNode = new KeyValuePair(key, value);
    let bucket = this.hashMod(key);

    if (this.data[bucket] !== null ) {
       newNode.next = this.data[bucket];
    } 

    this.data[bucket] = newNode;
    this.count++;

  }


  resize() {

    // Fill this in
    let keysValues = [];
    let val;

    
     for(let i = 0; i < this.capacity; i++) {
         let crt = this.data[i];

         if (crt !== null) {
             keysValues.push([crt.key,crt.value]);

             while(crt.next !== null) {
               crt = crt.next;

               keysValues.push([crt.key,crt.value]);
             }
        }    

      }
    
      for(let i = 0; i < keysValues.length; i++) {
          let key = keysValues[i][0];
          this.delete(key);
      }
    
      this.data.concat(new Array(this.capacity).fill(null));
      this.capacity *= 2;
    
      for(let i = 0; i < keysValues.length; i++) {
          let key = keysValues[i][0];
          let val = keysValues[i][1];
          this.insert(key, val);
      }

  }


  delete(key) {

    // Fill this in
    let bucket = this.hashMod(key);
    let crt = this.data[bucket];
  
    if (crt.key === key) {
        this.data[bucket] = crt.next;
        this.count--;
        return;
    } 
 
    while (crt.next.key !== key) {
          crt = crt.next;
    }

    crt.next = crt.next.next;  
    this.count--;

}

}
module.exports = HashTable;


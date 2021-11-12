// Do not change this
class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Fill this in
    const newNode = new LinkedListNode(val, null);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

  }

  addToTail(val) {
    // Fill this in

    const newNode = new LinkedListNode (val, null);

    if (!this.head) {
        this.head = newNode;
        this.length++;
        return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
        currentNode = currentNode.next;
    }
  
    currentNode.next = newNode;
    this.length++;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
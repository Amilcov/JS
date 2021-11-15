// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //     O(1) because no matter how many nodes are added to the haed the time is the same

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
       
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        // Write your hypothesis on the time complexity of this method here
        //     O(1) because no matter how many nodes are added to the haed the time is the same
       // newNode.prev = this.tail.prev;
       if(!this.head) {
           this.head = newNode;
           this.tail = newNode;
       } else {
          this.tail.next= newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
       }
       this.length++;
    }

    removeFromHead() {
        let val;
        // Remove node at head
        if(!this.head) {
            return;
        }

        val = this.head.value;

        if(this.head.next === null) {
            this.head = null;
        } else {
           this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return val;

        // Write your hypothesis on the time complexity of this method here
        //     O(1) because no matter how many nodes are added to the haed the time is the same
    }

    removeFromTail() {
        // Remove node at tail
        let val;

        if (this.length === 0) {
            return;
        } else if (this.length === 1) {
            val = this.tail.value;
            this.head = null;
            this.tail = null; 
        } else {
            val = this.tail.value;
            this.tail = this.tail.prev
            this.tail.next = null;
        }

        this.length--;
        return val;

        // Write your hypothesis on the time complexity of this method here
        //     O(1) because no matter how many nodes are added to the haed the time is the same
    }

    peekAtHead() {
        // Return value of head node
        let val;

        if (this.length > 0) {
            val = this.head.value;
        }

        return val;

        // Write your hypothesis on the time complexity of this method here
        //     O(1) because no matter how many nodes are added to the haed the time is the same
    }

    peekAtTail() {
        // Return value of tail node
        let val;
        if (this.length > 0) {
           val = this.tail.value;
        }
        
        return val;
        // Write your hypothesis on the time complexity of this method here
        //     O(1) because no matter how many nodes are added to the haed the time is the same
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}

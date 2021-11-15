// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val, null);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
     

        // Write your hypothesis on the time complexity of this method here
        //     O(1) because no matter how many nodes are added to the haed the time is the same
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //      O(n) because times linear depends on how many nodes are in the list. 
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val, null);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(this.head !== null) {
           let val =  this.head;
           this.head = this.head.next;
           this.length--;

           return val;
        }  

        // Write your hypothesis on the time complexity of this method here
        //     O(1) because no matter how many nodes are added to the haed the time is the same

    }

    removeFromTail() {
        // Remove node at tail

        let val;
        let curr = this.head;

        if(curr === null) {
            return;
        }  

         if(curr.next === null) {
            val = curr;
            this.head = null;
            this.length--;
            return val;
        } 


        while(curr.next.next !== null) {
             curr = curr.next;
        }

      
        val = curr.next;
        curr.next = null;
        this.length--;
       
        return val;

        // Write your hypothesis on the time complexity of this method here
        //O(n) because times linear depends on how many nodes are in the list. 
    }

    peekAtHead() {
        // Return value of head node
        let val;

        if(this.head !== null) {
           val = this.head.value;
        }

        return val;

        // Write your hypothesis on the time complexity of this method here
        //     O(1) because no matter how many nodes are added to the haed the time is the same
    }

    print() {
        //Print out the linked list
        let curr = this.head;
        while (curr!== null) {
            console.log(`${curr.value}`);
            curr = curr.next;
        }
        //Write your hypothesis on the time complexity of this method here
             //O(n) because times linear depends on how many nodes are in the list. 

    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}

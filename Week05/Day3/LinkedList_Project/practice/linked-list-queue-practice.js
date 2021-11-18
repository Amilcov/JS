// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        //Implementation in O(n)
        let len = 0, curr;

        curr = this.head;

        while (curr !== null) {
            len++;
            curr = curr.next;
        }

        return len;

        //Implementation in O(1)
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let curr = this.head;

        if (curr == undefined) {
            return 0;
        }

        while (curr.next !== null) {
            sum += curr.value;
            curr = curr.next;
        }

        sum += curr.value;
        return sum;

        // Write your hypothesis on the time complexity of this method here
        //    On(n)

    }

    averageValue() {
        // Returns the average value of all the nodes
       
        let count = this.listLength();
        let sum = this.sumOfNodes();
        let avg;

        if(count !== 0) {
          avg = sum / count;
        }

        return avg; 

        // Write your hypothesis on the time complexity of this method here
        //          O(n)

    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let node = this.head;
        for (let i = 0; i < n ; i++) {
            node = node.next;
        }
   
        return node;

        // Write your hypothesis on the time complexity of this method here
        //          O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here

        //Singly List: O(n)
        let len = this.listLength();
        let mid;

        if (len % 2 === 1) {
            len++;
        }
        mid = len /2 - 1;
        let node = this.findNthNode(mid);

        return node;
    }

    reverse() {
        // Returns a new reversed version of the linked list
       
        let listSource = this.head;
        let len = this.listLength();

        let list = new SinglyLinkedNode();
        let arryValues = [];

        for (let i = 0; i < len; i++) {
            arryValues.unshift(listSource.value);
            listSource = listSource.next;
        }

        for (let i = 0; i < len ; i++) {
            let val = arryValues.pop();
            let newNode = new SinglyLinkedNode(val);

            if (i === 0) {
                list.head = newNode;
             
            } else {
                newNode.next = list.head;
                list.head = newNode;
            }
        }     
 

        return list;
       

        // Write your hypothesis on the time complexity of this method here
        //  O(n)
    }

    reverseInPlace() {
        
        // Reverses the linked list in-place
        let len = this.listLength();
        let mid = len / 2;
      
        let arryAddress = [];
        let crt = this.head;
     

        for (let i = 0; i < len; i++) {
             

             if (i < mid) {
                if (i  < parseInt(len / 2)) {
                    arryAddress.push(crt);
                }    
             } else {

                let val = crt.value;
                let elem = arryAddress.pop();

                crt.value = elem.value;
                elem.value = val;

             }   

             if (crt.next != undefined) crt = crt.next; 
        
        }

        // Write your hypothesis on the time complexity of this method here
        //   O(n)
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

            let crtHead = this.head;
            let crtTail = this.tail;

            while (crtHead !== crtTail) {

                if (crtHead.next === crtTail) {
                    return crtHead;
                }

                crtHead = crtHead.next;
                crtTail = crtTail.prev;

               
            }

            return crtHead;


        // Write your hypothesis on the time complexity of this method here
        // O(n) . comparend to SingleLinkedlist it's  half the time


    }

    reverse() {
        // Returns a new reversed version of the linked list
        let list = {head: null, tail: null};
        let listSource = this.head;

        while (listSource !== null) {
               let val = listSource.value;
               let newNode = new DoublyLinkedNode(val);

               if (!list.head) {
                   list.head = newNode;
                   list.tail = newNode;
               } else {
                   newNode.next = list.head;
                   list.head.prev = newNode.next;
                   list.head = newNode;

               }

               listSource = listSource.next;
        }

        return list;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let crtHead =  this.head;
        let crtTail =  this.tail;

         while (crtHead !== crtTail) {

               let val = crtHead.value; 
               crtHead.value = crtTail.value;
               crtTail.value =val;

               if (crtHead.next === crtTail) {
                  return;
               }

                crtHead = crtHead.next;
                crtTail = crtTail.prev;               

            }
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}

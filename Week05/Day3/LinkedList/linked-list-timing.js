const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

// Construct a timing test to verify the time complexities of
// `addToHead` and `addToTail` for both single and doubly
// linked lists




let list = new LinkedList();             //AddToHead: O(1); AddToTail:  O(n);
let doubleList = new DoublyLinkedList(); //AddToHead: O(1); AddToTail:  O(1);

let n = 100000;
let start, end;


//LinkedList(): AddToHead: O(1); 
start = new Date();
for (i = 0; i < n; i++) {
    list.addToHead(i);
}
end = new Date();
console.log(`LinkedList - Add ${n} elem To Head: ${end - start} ms`);


//LinkedList: AddToTail:  O(n);
start = new Date();
for (i = 0; i < n; i++) {
    list.addToTail(i);
}
end = new Date();
console.log(`LinkedList - Add ${n} elem To Tail: ${end - start} ms`);


//DoublyLinkedList: AddToHead: O(1); 
start = new Date();
for (i = 0; i < n; i++) {
    doubleList.addToHead(i);
}
end = new Date();
console.log(`DoublyLinkedList - Add ${n} elem To Head: ${end - start} ms`);


//DoublyLinkedList: AddToTail: O(1); 
start = new Date();
for (i = 0; i < n; i++) {
    doubleList.addToTail(i);
}
end = new Date();
console.log(`DoublyLinkedList - Add ${n} elem To Head: ${end - start} ms`);
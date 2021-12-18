// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {

    // Fill this in
    let node = new TreeNode(val);
    if (this.root === null) {
        this.root = node;
        return;
    }    

    let crt = this.root;
    let leaf = false;

    while (!leaf) {
        if (val < crt.val) {

          if (crt.left === null) {
              crt.left = node;
              leaf = true;
          } else {
             crt = crt.left;
          }
           
        } else {
          if (crt.right === null) {
              crt.right = node;
              leaf = true;
          } else {
              crt = crt.right;
            
          }

        }
    }
  


  }

  search(val) {

    // Fill this in
    if (this.root === null) return false;
    if (this.root.val === val) return true;
   
    let crt = this.root;
    while (true) {

      if (val === crt.val) {
        return true;
      }

      if (crt.left === null && crt.right === null) {
        return false;
      }
      

      if (val < crt.val) {
          crt = crt.left;
      } else {
        crt = crt.right;
      }

    }
    return false;
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal(currentNode = this.root) {
    let queue = [this.root]

    while (queue.length) {
        let node = queue.shift();
        console.log(node.val);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal(currentNode=this.root) {

    // Fill this in
    if (currentNode === null) return;
    console.log(currentNode.val);
    this.depthFirstTraversal(currentNode.right);
    this.depthFirstTraversal(currentNode.left);
  }

  preOrderTraversal(currentNode=this.root) {

    // Fill this in
    if (currentNode === null) return false;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode=this.root) {

    // Fill this in 
    if (currentNode === null) return false;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode=this.root) {

    // Fill this in
    if (currentNode === null) return null;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }



}

module.exports = [BinarySearchTree, TreeNode];

bst = new BinarySearchTree();

    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);
// console.log(bst);
bst.depthFirstTraversal();
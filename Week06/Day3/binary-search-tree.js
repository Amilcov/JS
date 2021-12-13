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

  insert(val) {
    // Fill this in
    let node = new TreeNode(val);

    if (this.root === null) {
        this.root = node;
        return;
    } else {


       let crt = this.root;
       let leaf = false; 
     
       while (!leaf) {

          if (val < crt.val) {

             if (crt.left !== null) {
               crt = crt.left;
             } else {
               crt.left = node;
               leaf = true;
             }
          } else {
             if (crt.right !== null) {
               crt = crt.right;
             } else {
               crt.right = node;
               leaf = true;
             }
          }
            
      
           
      }  

       
    }

  }

  search(val) {

    let crt = this.root;
    while (true) {

      if (crt === null) {
        return false;
      }

      if (crt.val === val) {
        return true;
      } 
 
      if (val < crt.val) {
      
        crt = crt.left;
      } else {
        crt = crt.right;
      
      }

    }

  }

  preOrderTraversal() {
    if (this.root === null) return;

    console.log(this.root.val);

    if (this.root.left) readValue(this.root.left);
    if (this.root.right) readValue(this.root.right);
   
    function readValue(tree) {
      console.log(tree.val);

      if (tree.left !== null) {
          readValue(tree.left);
      }
      if (tree.right !== null) {
          readValue(tree.right);
      }

    }
    
    
  }



  inOrderTraversal() {
    if (this.root === null) return;

    if (this.root.left) readValue(this.root.left);
    console.log(this.root.val);
    if (this.root.right) readValue(this.root.right);
   
    function readValue(tree) {
       if (tree.left !== null) {
          readValue(tree.left);
       }
       console.log(tree.val); 

       if (tree.right !== null) {
          readValue(tree.right);
       }
    }
  }
  postOrderTraversal() {
     if (this.root === null) return;
     if (this.root.left) readValue(this.root.left);
     if (this.root.right) readValue(this.root.right);
     console.log(this.root.val);
     function readValue(tree) {
       if (tree.left !== null) {
          readValue(tree.left);
       }
       if (tree.right !== null) {
          readValue(tree.right);
       }
       console.log(tree.val); 
    }
   
  }


}

module.exports = BinarySearchTree;

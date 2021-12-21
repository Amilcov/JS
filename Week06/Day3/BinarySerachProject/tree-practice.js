//const [BinarySearchTree] = require('./binary-search-tree.js'); 
const [BinarySearchTree, TreeNode] = require('./binary-search-tree.js');


// Practice problems on binary trees

function findMinBST (rootNode) {

  // Fill this in
  let crt = rootNode;

  while (crt.left !== null) {
    crt = crt.left;
  }

  return crt.val;
}

function findMaxBST (rootNode) {

  // Fill this in
  let crt = rootNode;

  while (crt.right !== null) {
    crt = crt.right;
  }

  return crt.val;
}

function findMinBT (rootNode) {

  // Fill this in
  let queue = [rootNode];
  let min = rootNode.val;

  while (queue.length > 0){
        let tree = queue.shift();

        if (tree.val < min) {
           min = tree.val;
        }

        if (tree.left !== null) {
           queue.push(tree.left);
        }

         if (tree.right !== null) {
           queue.push(tree.right);
        }
  }
  return min;

}

function findMaxBT (rootNode) {

  // Fill this in
  let queue = [rootNode];
  let max = rootNode.val;

  while (queue.length > 0){
        let tree = queue.shift();

        if (tree.val > max) {
           max = tree.val;
        }

        if (tree.left !== null) {
           queue.push(tree.left);
        }

         if (tree.right !== null) {
           queue.push(tree.right);
        }
  }
  return max;

}

function getHeight (rootNode) {


  // Fill this in
  // if (rootNode === undefined) return 0;

  // let crt;
  //   if (rootNode.hasOwnProperty(root)) {
  //     crt = rootNode.root;
  // } else {
  //     crt = rootNode;
  // }  
 
  // if (crt.left !== null && crt.right !== null) {
  //    return 1 + Math.max(getHeight(crt.left), getHeight(crt.right));
  // }

  // if (crt.left !== null ) {
  //    return 1 + getHeight(crt.left);
  // }

  //  if (crt.right !== null ) {
  //    return 1 + getHeight(crt.right);
  // }

}

function countNodes (rootNode) {

  // Fill this in

 
  let count = 0;
  let  queue;

  if (rootNode.root === undefined) {
      queue = [rootNode] 
  } else {
      queue = [rootNode.root];
  }  
 
  
  while (queue.length > 0) {
         let tree = queue.shift();
         count++;
         if (tree.left !== null) queue.push(tree.left);
         if (tree.right !== null) queue.push(tree.right);
  }

  return count;
}

function balancedTree (rootNode) {

  // Fill this in

}

function getParentNode (rootNode, target) {

  // Fill this in
  
   let crt = rootNode;
   if (rootNode.val === target) return null;
   while (true) {
  
     if (crt.left !== null && crt.left.val === target) {
       return crt;
     }

     if (crt.right !== null && crt.right.val === target) {
       return crt;
     }

     if (target < crt.val) {
         if (crt.left === null) {
           return undefined;
         } else {
            crt = crt.left;
         }; 
     } else {
         if (crt.right === null) {
           return undefined;
         } else {
            crt = crt.right;
         }; 

     }
   }

}

function inOrderPredecessor (rootNode, target) {
   let parentNode = getParentNode (rootNode, target);
   let targetNode;

   if (parentNode === null) {
       if (rootNode.val === target) {
           targetNode = rootNode;
       } else {
            return null;
       }
   } else {
      if (parentNode.left!== null && parentNode.left.val === target){
          targetNode = parentNode.left;
      }  else {
          targetNode = parentNode.right;
      }
   }


   if (targetNode.left === null) {
     if(targetNode.right === null) {
       return null;
     } else {
       if (parentNode === null) {
           return null;
       } else {
         return parentNode.val;
       }
     } 
   } else {
      crt = targetNode.left;
      while (crt.right !== null) {
             crt = crt.right;
    }
      return crt.val;
   }
             

}


function deleteNodeBST (rootNode, target) {

  // Fill this in

}

module.exports = [
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
]


let bst = new BinarySearchTree();

    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);

     //console.log(bst);
    //console.log(countNodes(bst));
    //console.log(getHeight(bst));
    //getParentNode (bst.root, 3)
    //console.log(inOrderPredecessor (bst.root, 3));

    
       let bstRoot;
  let bstRootUnbalanced;
  let btRoot;
  let btRootUnbalanced;
  let rootNode;

  let rootNodeUnbalanced;

    bstRoot = new TreeNode(4);
    bstRoot.left = new TreeNode(2);
    bstRoot.left.left = new TreeNode(1);
    bstRoot.left.right = new TreeNode(3);
    bstRoot.right = new TreeNode(6);
    bstRoot.right.left = new TreeNode(5);
    bstRoot.right.right = new TreeNode(7);


    bstRootUnbalanced = new TreeNode(1);
    bstRootUnbalanced.right = new TreeNode(2);
    bstRootUnbalanced.right.right = new TreeNode(3);
    bstRootUnbalanced.right.right.right = new TreeNode(4);
    bstRootUnbalanced.right.right.right.right = new TreeNode(5);
    bstRootUnbalanced.right.right.right.right.right = new TreeNode(6);
    bstRootUnbalanced.right.right.right.right.right.right = new TreeNode(7);

      btRoot = new TreeNode(1);
    btRoot.left = new TreeNode(2);
    btRoot.left.left = new TreeNode(4);
    btRoot.left.right = new TreeNode(5);
    btRoot.right = new TreeNode(3);
    btRoot.right.left = new TreeNode(6);
    btRoot.right.right = new TreeNode(7);

      btRootUnbalanced = new TreeNode(4);
    btRootUnbalanced.right = new TreeNode(3);
    btRootUnbalanced.right.right = new TreeNode(2);
    btRootUnbalanced.right.right.right = new TreeNode(1);
    btRootUnbalanced.right.right.right.right = new TreeNode(7);
    btRootUnbalanced.right.right.right.right.right = new TreeNode(6);
    btRootUnbalanced.right.right.right.right.right.right = new TreeNode(5);
/*
console.log(bstRoot)
     console.log(countNodes(bstRoot))//.to.equal(7);
     console.log(countNodes(bstRootUnbalanced))//.to.equal(7);

     console.log(countNodes(btRoot))//.to.equal(7);
     console.log(countNodes(btRootUnbalanced))//.to.equal(7);
    

  // it('should work on a subtree', function() {
     console.log(countNodes(bstRoot.left))//.to.equal(3);
     console.log(countNodes(bstRootUnbalanced.right))//.to.equal(6);

     console.log(countNodes(btRoot.left))//.to.equal(3);
     console.log(countNodes(btRootUnbalanced.right.right))//.to.equal(5);


     console.log(btRoot.root)

     */

     
  
     //console.log(inOrderPredecessor(bstRoot, 4))//).to.equal(3);
     //console.log(inOrderPredecessor(bstRootUnbalanced, 6))//).to.equal(5);

 

  
    //console.log( inOrderPredecessor(bstRoot, 1))//).to.equal(null);
    console.log( inOrderPredecessor(bstRootUnbalanced, 1))//).to.equal(null);

  
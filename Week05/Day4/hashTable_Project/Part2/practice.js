const HashTable = require('../Part1_hash-table/hash-table');


//solution 4:  O(n): 284ms
function anagrams(str1, str2) {
  let obj = {};

  for (let i = 0; i < str1.length; i++) {
       let char = str1[i];
       obj[char] = (obj[char] || 0) + 1;
  }


  for (let i = 0; i < str2.length; i++) {
       let char = str2[i];
       if (obj[char] > 0) {
           obj[char]--;
       } else {
           return false;
       }
  }
  for (let k in obj) {
      if(obj[k] !== 0) {
        return false;
      }
  }

  return true;
}



/*
//solution 3: O(n)<:  423ms 
function anagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
*/



/*solution 2:
function anagrams(str1, str2) {

  for (let i = 0; i < str1.length; i++) {
       let char = str1[i];

       if (!str2.includes(char)) {
          return false;
       }
  }

  return true;
}
*/

/* solution 1:

function anagrams(str1, str2) {
  // Fill this in
   let hashTable = new HashTable(10);  

   for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        hashTable.insert(char, '');
   }

   
   for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        
       
        if (hashTable.read(char) === null) {
            return false;
        } else {    
            hashTable.delete(char);
        }
    }

    if (hashTable.count !== 0) {
       return false;
    } 

    return true;
}
*/



 //solution 1:  O(n) : 107ms
function commonElements(arr1, arr2) {

  // Fill this in
 
  
  let obj = {};
  let arry = [];

  for (let i = 0; i < arr1.length; i++) {
       let elem = arr1[i];
       obj[elem] = (obj[elem] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
       let elem = arr2[i];

       if (obj.hasOwnProperty(elem) && obj[elem] > 0) {
          arry.push(elem);
          obj[elem]--;
       }
  }

  return arry;
}




/*
// solution 2: - O(n) >>> 30s
function commonElements(arr1, arr2) {
  let arry = [];

   for (let i = 0; i < arr1.length; i++) {
       let elem = arr1[i];

       if (arr2.includes(elem)) {
           arry.push(elem);
       } 
   }

   return arry;
}
*/



//solution 1: O(n): 204ms
function duplicate(arr) {

  // Fill this in
  let set = new Set();


  for (let i = 0; i < arr.length; i++) {
       let elem = arr[i];

       if (set.has(elem)) {
         return elem;
       }
       set.add(elem);
  }
  
}



/*
//solution 2: O(n)>>> 1000 ms

function duplicate(arr) {


    for (let i = 0; i < arr.length; i++) {
         let elem = arr[i];

         if (arr.slice(0, i).includes(elem)) {
             return elem;
         }

    }


}
*/


//solution 4:  O(n): 416ms
function twoSum(nums, target) {
  let obj = {};

   for (let i = 0; i < nums.length; i++) {
        let elem = nums[i];
        obj[elem] = (obj[elem] || 0) + 1;
   } 

   for (k1 in obj) {
        let k2 = target - k1;
      
        if (obj[k2] !== undefined && (k1 !=  k2  || obj[k1] > 1)) {
           return true;
       }
     
   }

  return false;
  
}

/*()
//solution 3:  1253ms;
function twoSum(nums, target) {
  let obj = {};

   for (let i = 0; i < nums.length; i++) {
        let elem = nums[i];
        obj[elem] = (obj[elem] || 0) + 1;
   } 

   for (k1 in obj) {
     for (k2 in obj) {
       if ( k1 + k2 == target) {
           return true;
       }
     }
   }

  return false;
*/

/*
//solution 3:  1253ms;
function twoSum(nums, target) {
  let obj = {};

   for (let i = 0; i < nums.length; i++) {
        let elem = nums[i];
        obj[elem] = (obj[elem] || 0) + 1;
   } 

   for (k1 in obj) {
     for (k2 in obj) {
       if ( k1 + k2 == target) {
           return true;
       }
     }
   }

  return false;
  */


/*
//solution 2: O(n)>>> 1000 ms
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
         let first = nums[i];
         let second = target - first;
         let arryRest = nums.slice(0, i) 
         arryRest.concat(nums.slice(i+1));
         if (arryRest.includes(second)) {
             return true;
         }
    }
    return false;
}

*/

/*
//solution 1: O(n)>>> 1000 ms
function twoSum(nums, target) {

  // Fill this in
  for (let i = 0; i < nums.length; i++) {
       for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
              return true;
            }
       }
  }

 return false;
}
*/


//solution 1: O(n): 634ms
function wordPattern(pattern, strings) {

  // Fill this in
  if (pattern.length !== strings.length) {
     return false;
  }

  if ( new Set(pattern.split('')).size !== new Set(strings).size) {
     return false;
  }

  let obj = {};

  for (let i = 0; i < strings.length; i++) {
       let key = pattern[i];
       let val = strings[i];
    
       if(obj[key] !== undefined  && (obj[key] !== val)) {
          return false;
       } else {
          obj[key] = val;
       }
        
  }

  return true;
}




module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];


r = wordPattern("ABBA", ['dog', 'cat', 'cat', 'dog'])//).to.be.true;
console.log(r);

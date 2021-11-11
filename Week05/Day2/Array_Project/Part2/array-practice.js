const findMinimum = arr => {

  // Your code here
  //Time: O(n)
  //Space: O(1) 
  let min;
  for (let i = 0; i < arr.length; i++) {
       if(min === undefined || min > arr[i]) {
         min = arr[i];
       }
  }
  return min;

};

const runningSum = arr => {

  // Your code here
   //Time: O(n)
  //Space: O(n) 
  let arrySum = [];
  for (let i = 0; i < arr.length; i++) {
       arrySum[i] = arr[i];
       if(i > 0) {
          arrySum[i] += arrySum[i - 1];
       }
  }
  return arrySum;
};

const evenNumOfChars = arr => {

  // Your code here
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
  //Time: O(n2)
  //Space: O(1) 
 
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {

           let sum = arr[i] + arr[j];
           if (sum === target) {
             return true;
           }

      }
  }
  return false;

};

const secondLargest = arr => {

  // Your code here
  let max;
  let secondMax;
  //Time: O(n)
  //Space: O(1) 

  for (let i = 0; i < arr.length; i++) {

      if(max === undefined || max <= arr[i]) {
         secondMax = max;
         max = arr[i];
      }
      if (i > 0 && secondMax === undefined) {
         secondMax = Math.min(arr[i], arr[i]);
      }

  }
  return secondMax;
};

const shuffle = (arr) => {

  // Your code here
  let newArry = [];
  while (newArry.length < arr.length) {
         let randomIdx = parseInt(Math.random() * arr.length);
         let selectedElem = arr[randomIdx];

         if (!newArry.includes(selectedElem)) {
             newArry.push(selectedElem);
         }
  }  
  return newArry;

};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];

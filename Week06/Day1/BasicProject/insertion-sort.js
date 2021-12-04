
// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {

  // Copy the original array
  let arrCopy = new Array();
  arr.forEach (e => arrCopy.push(e));

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
   while (arrCopy.length > 0) {
  
      // Do not move this console.log
      console.log(sorted.join(","));

      // Pop a value from the array
      let elem = arrCopy.pop();
      let idxIndex = sorted.length;  
    

    // Create a new spot at the end of the array
    // Walk through the sorted array in reverse order
      // Check if the value to the left is smaller than the new value
        // If so, you've reached the insertion point so exit the loop
        // If not shift the value to the right by 1 and continue

       while (sorted[idxIndex - 1] > elem) {
             sorted[idxIndex] = sorted[idxIndex - 1];
             idxIndex --;
        }

    // Insert the unsorted value at the break point
    sorted[idxIndex] = elem;
  }

  // Return the sorted array
  return sorted;
}


// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {

  // Set a pointer diving the array into sorted and unsorted halves
  let divider = 1;
  // Repeat while the unsorted half is not empty:
    while(divider < arr.length) {
        // Do not move this console.log
         console.log(arr.join(","));

        //Grab the first value from the unsorted half
         let elem = arr[divider];
         

    // For each value starting from the divider,
      // Check if the value to the left is smaller than the unsorted value
        // If so, you've reached the insertion point so exit the loop
        // If not shift the value to the right by 1 and continue
        let idx = divider;
         while (elem < arr[idx - 1] && idx >= 0) {
               arr[idx] = arr[idx - 1];
               idx--;
         }
  

    // Insert the unsorted value at the break point
     arr[idx] = elem;
      
    // Increment the dividing pointer and repeat
      divider++;
    }

  return arr; 
}

module.exports = [insertionSort, insertionSortInPlace];


// let arry = [2,4,6,8,1,3,5,7,9];
// let r = insertionSort(arry);
// console.log(r);


// arry = [2,4,6,8,1,3,5,7,9];
// console.log(`array ul este: ${arry}`)
// r = insertionSortInPlace(arry);
// console.log(arry);
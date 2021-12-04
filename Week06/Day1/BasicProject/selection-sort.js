

function selectionSort(arr) {

  // Copy the original array  
  let arrCopy = new Array();
  arr.forEach( e => arrCopy.push(e));


  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (arrCopy.length) {
     let min, idxMin;

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half

    for (let i = 0; i < arrCopy.length; i++) {
      if (min === undefined || min > arrCopy[i]) {
          min = arrCopy[i];
          idxMin = i;
      }
   
    }

    // Save and remove the value at the min index
     arrCopy.splice(idxMin, 1);
  
    // Add the min value to the end of the sorted array
     sorted.push(min);
  }

    return sorted;
}



function selectionSortInPlace(arr) {
 
  // Set a pointer at zero diving the array into sorted and unsorted halves
   let divider = 0;

  // Repeat while the unsorted half is not empty:
    while (divider < arr.length) {
    let min, idxMin;

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    for (let i = divider; i < arr.length; i++) {
       
       if (min === undefined || min > arr[i]) {
          min = arr[i];
          idxMin = i;
       }
    }

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1
     while (idxMin > divider) {
      arr[idxMin] = arr[idxMin - 1];
      idxMin--;
    }

  
    // Put the min value at the divider
    arr[divider] = min;


    // Increment the divider and repeat
    divider++;
  }

    return arr;
}


module.exports = [selectionSort, selectionSortInPlace];


// let arry = [2,4,6,8,1,3,5,7,9];
// let r = selectionSort(arry);
// console.log(r);



// let arry = [2,4,6,8,1,3,5,7,9];
// r = selectionSortInPlace(arry);
// console.log(arry);
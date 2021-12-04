
function bubbleSort(arr) {


    // Iterate through the array
    sort = true;

    while(sort) {
      sort = false;
      for (let i = 0; i < arr.length - 1; i++) {

      // If the current value is greater than its neighbor to the right
        // Swap those values
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;

            sort = true;
            console.log(arr.join(","));
        } 
        // Do not move this console.log
        
      }
    }
    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
return arr;
}

module.exports = [bubbleSort];


// let arry = [2,1, 4,6,8,1,3,5,7,9];
// let r = bubbleSort(arry);
// console.log(r);
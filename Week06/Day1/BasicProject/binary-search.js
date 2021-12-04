function linearSearch (arr, target) {

  // Can you solve this in one line?

  return arr.indexOf(target);

};

function binarySearch(arr, target) {

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {

     let divider = parseInt ( (start + end ) / 2);
     let elemDivider = arr[divider];

     if (elemDivider === target) {
        return divider;
     }

     if (target < elemDivider) {
         end = divider - 1;
     } else {
         start = divider + 1;
     }

  }

 return -1
  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

    // Find the midpoint between high and low indices

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers

}


module.exports = [linearSearch, binarySearch]


// let arry = [1, 3, 7, 89, 2, 456, 7, 90, 45]
// let r = binarySearch(arry, 90);
// console.log(r);
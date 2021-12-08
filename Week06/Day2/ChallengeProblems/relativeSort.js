// Relative Sort
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.


function relativeSort(arr1, arr2) {
      return arr1.sort( (a, b) => compare(a, b, arr2));
}


function compare (a, b, arr2) {
    if (arr2.includes(a) && arr2.includes(b)) return arr2.indexOf(a) - arr2.indexOf(b);
    if (!arr2.includes(a) && !arr2.includes(b) ) return a - b;
    if (arr2.includes(a) && !arr2.includes(b) ) return -1
    if (!arr2.includes(a) && arr2.includes(b) ) return 1
}

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];

console.log(relativeSort(arr1,  arr2));   // => [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19] 

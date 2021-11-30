const {binarySearch} = require('./binarySearch');

// Fill an array with 1 million integers
n = 1000000;
arr = [];
for (let i = 0 ; i < n ; i ++) {
  arr.push(i);
}

// Pick 10 thousand random values to search for, from -n to n
valuesToSearch = [];
for (let i = 0 ; i < 10000 ; i++) {
  valuesToSearch.push(Math.floor(Math.random() * 2 * n) - n);
}

startTime = Date.now();
for (let i = 0 ; i < valuesToSearch.length ; i++) {
  arr.includes(valuesToSearch[i]);
}
endTime = Date.now();

console.log(`Linear Search: ${endTime - startTime}ms`); // Linear Search: 8093ms


startTime = Date.now();
for (let i = 0 ; i < valuesToSearch.length ; i++) {
  binarySearch(arr, valuesToSearch[i]);
}
endTime = Date.now();

console.log(`Binary Search: ${endTime - startTime}ms`);  // Binary Search: 8ms

//binarySearch vs linearSerach
//12 vs 1162
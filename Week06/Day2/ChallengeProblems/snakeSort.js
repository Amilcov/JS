//Given an array, sort it such that even indices are ascending from least to greatest and odd indices are the remaining values in descending order.



function snakeSort(arr) {
 
    arr.sort((a,b) => a - b); 
 
    for(let i = 1; i < arr.length ; i += 2) {
        let elem  = arr.pop();
        arr.splice(i, 0, elem);

    }
    
    return arr;
}
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [9, 91, 4, 73, 1, 166, 24, 415];

console.log(snakeSort(arr1));            // => [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
console.log(snakeSort(arr2));            // => [1, 415, 4, 166, 9, 91, 24, 73];
function recursiveSort(arr) {
  if (arr.length === 0) return

  let max = arr[0];idxMax = 0;

  for (let i = 1; i < arr.length; i++) {
      if (max < arr[i]) {
          max = arr[i];
          idxMax = i;
      }
  } 

 arr.splice(idxMax,1) 
 recursiveSort(arr);
 arr.push(max);
 return arr;
}


module.exports = recursiveSort;

let arr = [23, 6, 18, 9, 2, 10]
recursiveSort(arr);

console.log(arr)
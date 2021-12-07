

function mergeSort(arr) {

    if (arr.length <= 1) return arr

    let mid = parseInt(arr.length / 2 );
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
   
    return merge(left, right)
}

function merge(a, b) {
   
    if (a ===  undefined || b === undefined) {
        return
    }
  let idx1 = 0;
  let idx2 = 0;
  let arr = [];

  while ( arr.length < a.length + b.length) {
   
         if (idx1 === a.length) {
             arr = arr.concat(b.slice(idx2));
             break;
         }
         if (idx2 === b.length) {
             arr = arr.concat(a.slice(idx1));
             break;
         }

         let min;

         if (a[idx1] < b[idx2]) {
             min = a[idx1];
             idx1++;
         } else {
             min = b[idx2];
             idx2++;
         }

         arr.push(min);  
  }


return arr;
}

let x = [7, 0, 6, 34, 5 , 3 , 4]
let r = mergeSort(x);
console.log(r);


// let r = merge([7], [0, 6])
// console.log(r)
function zerosToRightInPlace(arr) {
    let idxNonZero = -1;

    for (let i = arr.length - 1; i >= 0; i--){
         let elem = arr[i];
  
         if (idxNonZero === -1 && elem) {
             idxNonZero = i;
             continue;
         } 

         if (!elem && idxNonZero !== -1) {
             [arr[i], arr[idxNonZero]] = [arr[idxNonZero], arr[i]];
             idxNonZero--;
         }
     
    }

    return arr;
}

//O(n2)
function zerosToRightInPlaceKeepOrder(arr) {
    let idxNonZero = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
         let elem = arr[i];
         if (idxNonZero === -1 && elem) {
             idxNonZero = i;
             continue;
         } 

        if (!elem && idxNonZero !== -1) {
            arr.splice(i, 1);
            arr.push(0);
            idxNonZero--;
        }
    }

}

//O(n)
function moveZeros(arr) {

    let idxZero = -1;
    for (let i = 0; i < arr.length; i++) {
         let elem = arr[i];


         if (idxZero === -1 && !elem) {
            idxZero = i;
            continue;
         } 

         if (idxZero !== -1 && elem) {
            [arr[i],arr[idxZero]] = [arr[idxZero], arr[i]];
            idxZero++;
        }
    }

}


let arr = [2, 0, 5, 9, 0, 6, 1];
zerosToRightInPlace(arr);
console.log(arr);

arr = [2, 0, 5, 9, 0, 6, 1];
zerosToRightInPlaceKeepOrder(arr);
console.log(arr);

arr = [2, 0, 5, 9, 0, 6, 1];
moveZeros(arr);
console.log(arr);

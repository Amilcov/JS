function selectionSort_inPlace(arry) {
   let divider = 0;

   while (divider !== arry.length) {

      let min, idxMin;

      for (let i = divider; i < arry.length; i++) {
          if (min === undefined || min > arry[i]) {
              min = arry[i];
              idxMin = i;
          }
      }

      for (let i = idxMin - 1; i >= divider; i--) {
               arry[i + 1] = arry[i];
      }

      arry[divider] = min; 
      divider++;
   }

    return arry; 
}


//let arry = [9, 7, 3]//, 5, 2]
let arry = [1,7,2,9,210,57,3,578,9]

let r = selectionSort_inPlace(arry);
console.log(r);
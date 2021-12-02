function selectionSort_outOfPlace(arry) {
   let sorted = [];

   while (arry.length) {
         let min, idxMin; 
         
          for (let i = 0; i < arry.length; i++) {
               if (min === undefined || min > arry[i]) {
                   min = arry[i];
                   idxMin = i;
               }
          }
          arry.splice(idxMin, 1);
    
       sorted.push(min);
   }
   return sorted;
}

//let arry = [9, 7, 3, 5, 2]
let arry = [1,7,2,9,210,57,3,578,9]

let r = selectionSort_outOfPlace(arry);
console.log(r);
function insertSort_inPlace(arry) {
  
    for (let divider = 1; divider < arry.length; divider++) {
        
         let elem = arry[divider];
         let idxInsert = 0;

         while (arry[idxInsert] < elem) {
                idxInsert++;
         }
    
         for (let j = divider - 1; j >= idxInsert; j--) {
              arry[j + 1] = arry[j];
         }

         arry[idxInsert] = elem;

    }

    return arry;
}

//arry = [9, 7, 3, 5, 2]
arry = [1,7,2,9,210,57,3,578,9]

r = insertSort_inPlace(arry);
console.log(r);
function insertSort_inPlace(arry) {
  
    for (let divider = 1; divider < arry.length; divider++) {
        
         let elem = arry[divider];
         let idxInsert = divider;


         while (arry[idxInsert - 1] > elem && idxInsert > 0) {
                arry[idxInsert] = arry[idxInsert - 1];
                idxInsert--;
         }
         
            arry[idxInsert] = elem;
    }

    return arry;
}

//arry = [9, 7, 3, 5, 2]
arry = [1,7,2,9,210,57,3,578,9]

r = insertSort_inPlace(arry);
console.log(r);

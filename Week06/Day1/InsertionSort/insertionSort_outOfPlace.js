function insertSort_outOfPlace(arry) {
    sorted = [];


      while (arry.length > 0) {
         let elem = arry.shift();
         let idxInsert = 0;

         while(sorted !==[] && sorted[idxInsert] < elem) {
           idxInsert++;
         }

         sorted.splice(idxInsert,0, elem);

    }
    
    return sorted;
}

//arry = [9, 7, 3, 5, 2]
arry = [1,7,2,9,210,57,3,578,9]

r = insertSort_outOfPlace(arry);
console.log(r);

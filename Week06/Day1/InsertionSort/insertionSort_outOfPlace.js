function insertSort_outOfPlace(arry) {
    newArry = [];

    for (let i = 0; i < arry.length; i++) {
         let elem = arry[i];
         let idxInsert = 0;

         while(newArry !==[] && newArry[idxInsert] < elem) {
           idxInsert++;
         }

         newArry.splice(idxInsert,0, elem);

    }
    
    return newArry;
}

//arry = [9, 7, 3, 5, 2]
arry = [1,7,2,9,210,57,3,578,9]

r = insertSort_outOfPlace(arry);
console.log(r);
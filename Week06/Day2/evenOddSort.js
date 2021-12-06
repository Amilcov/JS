function evenOddSort(arr) {
    let divider = arr[0] % 2 ? -1 : 0;

    for (let i = 1; i < arr.length; i++) {
        let elem = arr[i];
        let isEven = elem % 2 ? false : true;
        let li_insert = i;

        if (isEven) {
            for (let j = i - 1; j >= 0; j--){
                if (j > divider || elem < arr[j]) {
                    arr[j + 1] = arr[j];
                    li_insert = j;
                } 
            }
            divider++;

        } else {
            for (let j = i - 1; j > divider; j-- ) {
                if (elem < arr[j]) {
                    arr[j + 1] = arr[j];
                    li_insert = j;
                }
            }

        }
          
        arr[li_insert] = elem;
    
    }
    return arr;
}

let arr = [10, 2, 5, 7, 8, 4, 1]
let r = evenOddSort(arr)
console.log(r)
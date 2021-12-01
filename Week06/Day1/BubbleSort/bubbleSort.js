function bubbleSort(arry) {
    let sorted = false;

    while (!sorted) {

       for(let i = 0; i < arry.length - 1; i++) {
           sorted = true;

           if (arry[i] > arry[i + 1]) {
               [arry[i], arry[i + 1]] = [arry [i + 1], arry[i]];
               sorted = false;
           }
       }

    }
    return arry
}

arry = [1, 200, 15, 8, 45, 20, 1]
r = bubbleSort(arry)
console.log(r)
function largestNumber(arr) {
//     return arr.sort( 
//                  (e1, e2) => {
//                       if (e1[0] > e2[0]) { console.log(' 1. e1=', e1, ' e2 =', e2 ) ;return -1;}
//                       if (e2[0] > e1[0]) { console.log(' 2. e2=', e2, ' e1 =', e1 ) ;return 1};

//                       console.log('3.')
//                       return e2 - e1;
//     })};

// return arr.sort( (a, b) => {
//                     if (a.toString() > b.toString() ) return -1;
//                     if (a.toString() < b.toString() ) return 1;
                            

//  });
// }

 return arr.sort( (a, b) => compare(a, b))
};

function compare(a, b) {

   
    let arr_a = a.toString().split('');
    let arr_b = b.toString().split('');

    if (arr_a.length === arr_b.length) return b - a;


   for (i = 0; i < arr_a.length; i++) {
                 
        if (arr_b[i] === undefined) { 

            if (arr_a[i] >= arr_a[i - 1]) {
                return -1
            } else {
                return 1
            }

        } 

        if (arr_a[i] !== arr_b[i]) {
            return arr_b[i] - arr_a[i];   
        }

        
        if (i === arr_a.length - 1 &&  arr_b.length > arr_a.length ) {
            console.log('kk')    
            if (arr_b[i] >= arr_b[i - 1]) {
                return -1
            } else {
                return 1
            }
        }

   }
  
  
}

 const arr1 = [10, 2]; 
 const arr2 = [3, 30, 34, 5, 9];
 const arr3 = [3, 34, 30]

console.log(largestNumber(arr1));        // => [2, 10], because 210 > 102
console.log(largestNumber(arr2));        // => [9, 5, 34, 3, 30], 9534330 is the largest 
 console.log(largestNumber(arr3));   


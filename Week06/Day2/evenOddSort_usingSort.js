function sort(a, b) {
    if (a % 2 === 0 && b % 2 === 1) return -1; 
    if (a % 2 === 1 && b % 2 === 0) return 1; 
    return a - b;
}

let arr = [10, 2, 5, 7, 8, 4, 1]
let r = arr.sort(sort);
console.log(r)
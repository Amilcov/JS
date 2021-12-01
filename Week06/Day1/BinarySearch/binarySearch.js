function binarySearch(arry, target) {

    let lo = 0;
    let hi = arry.length
    let mid;

    while ( lo <= hi) {

        mid = parseInt((lo + hi) /2);

        if (arry[mid] === target) {
            return mid;
        }

        if (target < arry[mid]) {
            hi = mid - 1;
        } else {
           lo = mid + 1;
        }

    }
     return -1;
}

module.exports = {binarySearch}

// let arr = [1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52, 53, 57, 63, 66, 67, 68, 69, 74, 76, 79, 82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100]
// target = 89

// let r = binarySearch(arr,target);
// console.log(r);


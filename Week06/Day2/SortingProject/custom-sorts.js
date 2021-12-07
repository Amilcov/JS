

function ageSort(users) {
  return users.sort((e1, e2) => e1.age - e2.age);
}


function oddEvenSort(arr) {
  return arr.sort( (e1, e2) => {
              if (e1 % 2 === 1 && e2 % 2 === 0) return -1;
              if (e1 % 2 === 0 && e2 % 2 === 1) return 1;
              return e1 - e2;
            })
}

function validAnagrams(s, t) {
  return s.split('').sort().join() === t.split('').sort().join();
}

function reverseBaseSort(arr) {
  // Fill this in
  return arr.sort((e1, e2) => {
                     if (e1.toString().length > e2.toString().length) return -1;
                     if (e1.toString().length < e2.toString().length) return 1;
                     return e1 - e2;

  })
}

function frequencySort(arr) {
  // Fill this in
  return arr.sort( (e1, e2) => {
                       if( arr.filter(target => target === e1).length > arr.filter(target => target === e2).length ) return 1;
                       if( arr.filter(target => target === e1).length < arr.filter(target => target === e2).length ) return -1;
                       return e2 - e1;
                  })
}

module.exports = [oddEvenSort, validAnagrams, reverseBaseSort,
                  frequencySort, ageSort];

  const arr1 = [1, 1, 2, 2, 2, 3];
  const arr2 = [2, 3, 1, 3, 2];
  const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

    console.log(frequencySort(arr1))//.to.deep.equal([3, 1, 1, 2, 2, 2]);
    console.log(frequencySort(arr2))//.to.deep.equal([1, 3, 3, 2, 2]);
    console.log(frequencySort(arr3))//.to.deep.equal([5, -1, 4, 4, -6, -6, 1, 1, 1]);

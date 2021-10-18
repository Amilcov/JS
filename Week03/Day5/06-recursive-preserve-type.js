/***********************************************************************
Write a recursive function `recursivePreserveType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept one string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with only elements of the
specified type. Note that the returned function only filters elements of one type,
as opposed to the last problem which accepted any number of strings.

const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ]
console.log(preserveFunc2('boolean')); // prints [ true, false ]

Note: the mocha tests do not test that your solution is implemented recursively.
However, for bonus points try to solve it both with recursion and iteration.
*/

function recursivePreserveType(array) {

   const selectFunction = (type, idx = 0) => {
        let elem = [];

        if (array.length === idx) {
            return [];
        }

        if (type === typeof array[idx]){
            elem = [array[idx]];
        }
        idx++;
        return [...elem, ...selectFunction(type, idx )]

    }

    return selectFunction;
}


const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ]
console.log(preserveFunc2('boolean')); // prints [ true, false ]


//Adriana NOTE to my self : 
//if instead of elem = [array[idx]] was  elem = array[idx] &&
//if return [...elem, ...selectFunction(type, idx )]  was return [...[elem], ...selectFunction(type, idx )] 
//the RESULT insead of [1, 2, 3] would be [ 1, [], 2, [], 3, [] ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = recursivePreserveType;
} catch (e) {
    module.exports = null;
}
        //logBetween
        //Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.


        // logBetween(-1, 2);  // => [-1, 0, 1, 2] 
        // logBetween(14, 6);  // => []
        // logBetween(4, 6);  // => [4, 5, 6]
        
//O(n)
function logBetween(start, end) {
    let arry = [];

    for (let i = start; i <= end; i++) {
        arry.push(i);
    }
    return arry;
}


        //   logBetweenStepper
        //Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

        // logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
        // logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]

//O(n)
 function logBetweenStepper (min, max, step) {
    let arry = [];

    for (let i = min; i <= max; i +=step) {
         arry.push(i);      
    }

    return arry;
 }       


            // printReverse
            // Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

            // printReverse(13, 18) // => [17, 16, 15, 14]
            // printReverse(90, 94) // => [91, 92, 93]

//O(n)
function printReverse(min, max) {
    let arry = []
    for (let i = max - 1; i > min; i--) {
        arry.push(i);
    }

    return arry;
}            


        //fizzBuzz
        //Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.
        //fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]
//O(n)
function fizzBuzz(max) {
    let arry = [];

    for (let i = 1; i < max; i++){
        if(i % 3 === 0 && i % 5 !== 0 || i % 3 !== 0 && i % 5 === 0 ) {
            arry.push(i);   
        }
    }

    return arry;
}        

        // isPrime
        // Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

        // Examples:

        // isPrime(2);  // => true
        // isPrime(10);  // => false
        // isPrime(11);  // => true
        // isPrime(9);  // => false
        // isPrime(2017);  // => true

//O(n)
function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n ; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}        


            // maxValue
            // Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.

            // maxValue([12, 6, 43, 2]);  // => 43
            // maxValue([]);  // => null
            // maxValue([-4, -10, 0.43]);  // => 0.43

//O(n)
function maxValue(arry) {

  let max = null;
  for (let i = 0; i < arry.length; i++) {
       let elem = arry[i];
       if (max === null || max < elem) {
           max = elem;
       }
  }

  return max;
}         

        // myIndexOf
        // Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. It should return the index value of the target if it is present in the array or -1 if it is not present.

        // CONSTRAINT: Do not use the indexOf or includes method

        // myIndexOf([1,2,3,4],4); // => 3
        // myIndexOf([5,6,7,8],2); // => -1

//O(n)
function myIndexOf(arry, target) {
 
    for (let i = 0; i < arry.length; i++) {
         let elem = arry[i];
         if (target === elem) {
             return i;
         }
    }

    return -1;
}

        // factorArray
        // Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.


        // factorArray([2,3,4,5,6],20) // => [2,4,5]
        // factorArray([2,3,4,5,6],35) // => [5]
        // factorArray([10,15,20,25],5) // => []

//O(n)
function factorArray(arry, number) {
    let arryFactors = [];
     
    for (let i = 0; i < arry.length; i++) {
         let elem = arry[i];
         if (number % elem === 0) {
             arryFactors.push(elem);
         }
    }
    
    return arryFactors;
}


        // oddRange
        // Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.


        // oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
        // oddRange(6);  // => [ 1, 3, 5 ]

//O(n)
 function oddRange(end) {
   let arry = [];
   for (let i = 1; i <= end; i++) {
        if ( i % 2 == 1) {
            arry.push(i);
        }
    }

    return arry;
 }  


        // reverseHyphenString
        // Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

        // reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
        // reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"

//O(n)
function reverseHyphenString(str) {
   let arry = str.split("-"); 
   let arryReverse = [];
   let strReverse;

   for (let i = arry.length - 1; i >= 0; i--) {
       let elem = arry[i];
       arryReverse.push(elem);
   }
    strReverse = arryReverse.join("-");

    return strReverse;
}    


    // intersect
    // Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

    // intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
    // intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []

//O(n)
function intersect(arry1, arry2) {
    let arryIntersect = [];

    for (let i = 0; i < arry1.length; i++) {
         let elem = arry1[i];

         if (arry2.includes(elem)) {
            arryIntersect.push(elem);
         }
    }

    return arryIntersect;
}

    // mirrorArray
    // Write a function mirrorArray(array) that takes in an array as an argument and returns a new array "mirrored" as shown in the examples:

    // mirrorArray([1,2,3]); => [ 1, 2, 3, 3, 2, 1 ]
    // mirrorArray(['a', 'b', 'c', 'd']);  => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

//O(n)
function mirrorArray(arry) {
    let arryMirror = arry;

    for (let i = arry.length - 1; i >= 0; i--) {
         let elem = arry[i];
         arryMirror.push(elem);
    }

    return arryMirror;
}

    // abbreviate
    // Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. Feel free to use the array below in your solution: const vowels = 'a', 'e', 'i', 'o', 'u';

    // abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
    // abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
    // abbreviate('hello world'); // => 'hll wrld'
    // abbreviate('how are you'); // => 'how are you'

//O(n2)
function abbreviate(sentence) {
    let vowels = 'aeiou';
    let arry = sentence.split(' ');
    let newArry = [];

    for (let i = 0; i < arry.length; i++) {
         let word = arry[i];

         if (word.length > 4) {
             for (let j = word.length - 1;  j >= 0; j--) {
                 let char = word[j];
                  if(vowels.includes(char)) {
                      word = word.substring(0, j) +  word.substring(j + 1); 
                  }          
             }
         }

         newArry.push(word);

    }


   return newArry.join(' ');
}   


    // adults
    // Write a function adults(people) that takes in an array of person objects. The function should return an array containing the names of those who have an age of 18 or higher.

    // const ppl = [
    //   {name: 'John', age: 20},
    //   {name: 'Jim', age: 13},
    //   {name: 'Jane', age: 18},
    //   {name: 'Bob', age: 7}
    // ];

    // adults(ppl); // => [ 'John', 'Jane' ]
//O(n)
function adults(people) {
    let arry = [];
    
    for (let i = 0; i < people.length; i++) {
        let person = people[i];

         if (person.age >= 18) {
             arry.push(person.name);
         }
    }

    return arry;
}    

    // countScores
    // Write a function countScores(people) that takes in an array of score objects, people, as its input. A score object, people, has two key-value pairs: a name (string) and a score (number). countScores(people) should return an object that has key-value pairs where each name is a key and the value is their total score.

    //    const ppl = [
    //   { name: "Anthony", score: 10 },
    //   { name: "Fred", score : 10 },
    //   { name: "Anthony", score: -8 },
    //   { name: "Winnie", score: 12 }
    // ];
    // countScores(ppl); // => { Anthony: 2, Fred: 10, Winnie: 12 }

    // // Example 2
    // const peeps = [
    //   { name: "Anthony", score: 2 },
    //   { name: "Winnie", score: 2 },
    //   { name: "Fred", score: 2 },
    //   { name: "Winnie", score: 2 },
    //   { name: "Fred", score: 2 },
    //   { name: "Anthony", score: 2 },
    //   { name: "Winnie", score: 2 }
    // ];

    // countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 }
//O(n)
function countScores(arry) {
    let obj = {};

    for (let i = 0; i < arry.length; i++) {
        let person = arry[i];
        obj[person.name] = (obj[person.name] || 0) + person.score;
    }

    return obj;
}


    // firstNPrimes
    // Using the isPrime function you made, write a function firstNPrimes(n) that returns an array of the first n prime numbers.

    // firstNPrimes(0);  // => []
    // firstNPrimes(1);  // => [2]
    // firstNPrimes(4);  // => [2, 3, 5, 7]

 //O(n)   
function firstNPrimes(n) {
    let arry = [];
    let i = 2; 

    while(arry.length !== n) {

          if (isPrime(i)) {
              arry.push(i);
          }

          i++;
    }

    return arry;
}

    // peakFinder
    // Write a function peakFinder(array) that takes in an array of numbers. It should return an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length of at least 2.

    // peakFinder([1, 2, 3, 2, 1]); // => [2]
    // peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
    // peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]
//O(n)
function peakFinder(arry) {
    let peeks = [];

    for (let i = 0; i < arry.length; i++) {
        let elem = arry[i];

        if (i > 0 && elem < arry[i - 1]) {
           continue;
        } 

        if (i < arry.length - 1 && elem < arry[i + 1]) {
            continue;
        }
      
        peeks.push(i);
    }

    return peeks;
}    


        // divisibleByThreePairSum
        // Write a function divisibleByThreePairSum(array) that takes an array of numbers. It should return an array of all the pairs of indices, whose elements sum to a multiple of three.

        // const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
        // arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

        // const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
        //arr2 // => [[1, 3]]
//O(n)
function divisibleByThreePairSum (arry) {

    let arryIncices = [];

        for (let i = 0; i < arry.length - 1; i++) {
             for (let j = i + 1; j < arry.length; j++) {
                 if ((arry[i] + arry[j]) % 3 === 0) {
                     arryIncices.push([i, j]);
                 }
            }
        }
    return arryIncices;
}      
        //zipArray
        // Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them together by returning a single 2D-array. Assume that both input arrays have the same length.

        // const a1 = ['a', 'b', 'c', 'd'];
        // const a2 = [10, 20, 30, 40];

        // const result = zipArray(a1, a2);
        // result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

function zipArray(arry1, arry2) {
    let arry2D = []
    for(let i = 0; i < arry1.length; i++) {
        arry2D.push([arry1[i], arry2[i]]);
    }
    return arry2D
}   


        // twoDimensionalTotal
        // Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers and returns the total sum of all elements. Examples:

        // const arr1 = [
        //   [5, 2, 5, 3],
        //   [12, 13],
        // ];

        // twoDimensionalTotal(arr1);  // => 40

        // const arr2 = [
        //   [2],
        //   [1, 9],
        //   [1, 1, 1]
        // ]

        // twoDimensionalTotal(arr2);  // => 15

//O(n2)        
function twoDimensionalTotal(arry) {
   let sum = 0;

   for (let i = 0; i < arry.length; i++) {
       let arryInside = arry[i];  

       sum +=arryInside.reduce((acc, elem) => { return acc + elem}, 0)
   }

   return sum;
}


        // countInnerElement
        // Write a function countInnerElement(arr) that takes in a 2-D array of elements. Each element of arr is a sub array that contains multiple elements. The number of elements contained in each sub array are not the same. You can assume each sub array contains at least one element. You should return an object that counts how many times each element in each sub array repeats.

        // const arr1 = [
        //   [1, 2, 4, 5],
        //   [2, 7, 4],
        //   [1, 4, 5, 2, 7]
        // ]

        // countInnerElement(arr1)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

        // const arr2 = [
        //   ['a','b','c','d'],
        //   ['a','b'],
        //   ['a','c','d','a']
        // ]

        // countInnerElement(arr2)  // => {a: 4, b: 2, c: 2, d: 2}

//0(n2)
function countInnerElement(arry){
    let obj = {};

    for (let i = 0; i < arry.length; i++) {
         let innerArry = arry[i];
         for (let j = 0; j < innerArry.length; j++) {
              let k = innerArry[j];
              obj[k] = (obj[k] || 0) + 1;
         }
    }

    return obj;
}
        // twoDiff
        // Write a function twoDiff(array), given an array of numbers, return a 2-D array, where each of the sub array are indices of the two numbers such that their difference is 2. If there are no such numbers, return an empty array.

        // NOTE: The pairs are unique. HINT: Account for negative difference too!


        // twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
        // twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
        // twoDiff([])  // => []
//O(n2)

function twoDiff(arry) {
   let arryIncides = [];
   for (let i = 0; i < arry.length; i++) {
       for (let j = i + 1; j < arry.length; j++) {
           if (Math.abs(arry[i] - arry[j]) === 2) {
               arryIncides.push([i, j]);
           }
       }
   }

   return arryIncides;
}

        // arrayDiff
        // Write a function arrayDiff(arr1, arr2) that takes in two arrays. The function should return a new array, containing the elements of arr1 that are not also in arr2.

        // Note: Assume both arrays have unique elements.

        // const array1 = [1, 23, 2, 43, 3, 4]
        // const array2 = [3, 23]
        // arrayDiff(array1, array2)  // => [1, 2, 43 ,4]

        // const array3 = ['a', 'ab', 'c', 'd', 'c']
        // const array4 = ['d']
        // arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']

//O(n2)        

function arrayDiff (arry1, arry2) {
    let arry = [];

    for (let i = 0; i < arry1.length; i++) {
        let elem = arry1[i];

        if (!arry2.includes(elem)) {
            arry.push(elem);
        }

    }

    return arry;
}


        // valueCounter
        // Write a function valueCounter(obj, val) that takes in an object and a value, the function should return the number of times val repeats as a value in obj.

        // const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
        // valueCounter(obj1, 'Anne')  // => 3

        // const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
        // valueCounter(obj2, 88)  // => 0

        // const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
        // valueCounter(pairs, 'Roman')  // => 2

//O(1)
function valueCounter(obj,val) {
    let count = 0;
    for (k in obj) {
        if (obj[k] === val) {
            count++;
        }
    } 

    return count;
}

        // elementCount
        // Write a function elementCount(array) that returns a object. Each key corresponds to an element in the array and the value corresponds to how many times that element appears in the array.

        // elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
        // elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }

//O(n)
function elementCount(arry) {
    let obj = {};
    for (let i = 0; i < arry.length; i++) {
         let elem = arry[i];
         obj[elem] = (obj[elem] || 0) + 1;
    }

    return obj;
} 

        // nextTwoPrimes
        // Write a function nextTwoPrimes(num) that takes in a number num and returns the next two prime numbers greater than num.

        // nextTwoPrimes(2);  // => [ 3, 5 ]
        // nextTwoPrimes(3);  // => [ 5, 7 ]
        // nextTwoPrimes(7);  // => [ 11, 13 ]
        // nextTwoPrimes(8);  // => [ 11, 13 ]
        // nextTwoPrimes(20);  // => [ 23, 29 ]
        // nextTwoPrimes(97);  // => [ 101, 103 ]


//O(n)
function nextTwoPrimes(n) {
    let arry = [];
    while (arry.length !== 2) {
        n++;
        if(isPrime(n)) {
            arry.push(n);
        }
      
    }

    return arry;
}    

        // pairProduct
        // Write a function pairProduct(arr, num) that accepts an array of numbers, arr, and a target number, num. It should return pairs of indices whose elements multiply to num. No pair should appear twice in the result.

        // CONSTRAINT: Use only while loops. No for loops.

        // pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
        // pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
        // pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]


//O(n2)
function pairProduct(arr, num) {
    let arryMultiple = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] * arr[j] === num) {
                arryMultiple.push([i,j]);
            }
        }
    }

    return arryMultiple;
}


        // twoDimensionalSize
        // Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument. The function should return the total number of elements in the 2D-array.

        // const arr1 = [
        //   [1, 2, 3],
        //   [4, 5],
        //   [6, 7, 8, 9]
        // ];
        // twoDimensionalSize(arr1);  // => 9

        // const arr2 = [
        //   ['a'],
        //   ['b', 'c', 'd', 'e']
        // ];
        // twoDimensionalSize(arr2);  // => 5

//O(n2)
function twoDimensionalSize(arry) {
    let count = 0;
    for (let i = 0; i < arry.length; i++) {
         count += arry[i].length;  
   }

   return count;
}


        // longWordCount
        // Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.

        // longWordCount("");  // => 0
        // longWordCount("short words only");  // => 0
        // longWordCount("one reallylong word");  // => 1
        // longWordCount("two reallylong words inthisstring");  // => 2
        // longWordCount("allwordword longwordword wordswordword");  // => 3
        // longWordCount("seventy schfifty five");  // => 1

//O(n)
function longWordCount(str) {
    let count = 0;
    let arryWord = str.split(' ');
    count = arryWord.filter(e => e.length > 7).length;
    return count;
}


        //  factorial
        // Write a function factorial(n), that returns the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

        // factorial(1);  // => 1
        // factorial(4);  // => 24
        // factorial(5);  // => 120
        // factorial(10);  // => 3628800

//O(n)
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}        


        // Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.

        // lcm(2, 3);  // => 6
        // lcm(6, 10);  // => 30
        // lcm(24, 26);  // => 312

//O(n)
function lcm(num1, num2) {
    let num = num1; 

    while(true === true) {
         if(num % num1 === 0 && num % num2 === 0) {
             return num;
         }
         num++;
    }
}     


        // hipsterfyWord
        // Write a function hipsterfyWord(word) that takes takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.


        // hipsterfyWord('proper') // => 'propr'
        // hipsterfyWord('tonic') // => 'tonc'
        // hipsterfyWord('PANTHER') // => 'PANTHR'
        // hipsterfyWord('BACKWARDS') // => 'BACKWRDS'

//O(n)
function hipsterfyWord(word) {
    let vowels ='aeiou';

    for (let i = word.length - 1; i >= 0; i--) {
         let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(0, i) + word.slice(i + 1); 
        }
    }

   return word; 
}


        // hipsterfy
        // Write a function hipsterfy(sentence) that takes takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.

        // hipsterfy("proper");  // => "propr"
        // hipsterfy("proper tonic panther");  // => "propr tonc panthr"
        // hipsterfy("towel flicker banana");  // => "towl flickr banan"
        // hipsterfy("runner anaconda");  // => "runnr anacond"
        // hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"

//O(n)
function hipsterfy(sentence) {
    let words = sentence.split(' ');
    let newSentence = [];

    for (let i = 0; i < words.length; i++) {
         let word = words[i];
         let newWord = hipsterfyWord(word);
         newSentence.push(newWord);

    }
    return newSentence.join(' ');
}

        // objectToString
        // Write a function objectToString(count) that takes in a char count object and returns a string representing the counts of each character.

        // objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
        // objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'

//O(1)
function objectToString(count) {
    let sentence = '';
    for (k in count) {
        let val = count[k];
        sentence += k.repeat(val);
    }

    return sentence;
}       


        // shortestWord
        // Write a function shortestWord(sentence) that returns the shortest word of a sentence. You can assume that the words of the sentence all have different lengths.

        // shortestWord('app academy is cool') // => 'is'
        // shortestWord('programming bootcamp') // => 'bootcamp'

//O(n)
function shortestWord(sentence) {
    let word;
    let words = sentence.split(' ');

    for(let i = 0; i < words.length; i++) {
        if (word === undefined || word.length > words[i].length) {
            word = words[i];
        }
    } 

    return word;
}

        // greatestCommonFactor
        // Write a function greatestCommonFactor(num1, num2) that returns the largest number that is divides both num1 and num2.

        // greatestCommonFactor(15, 25) // => 5
        // greatestCommonFactor(16, 24) // => 8
        // greatestCommonFactor(7, 11) // => 1

//O(1)
function greatestCommonFactor(num1, num2) {
    let great = Math.max(num1, num2);

    while(true) {
       if (num1 % great === 0 && num2 % great === 0 ) {
           return great;
       }
       great--;
    }
}      

        // isPassing
        // Write a function isPassing(assessments) that takes in an array of assessment objects. The function should return true if the average assessment score is at least 70. It should return false otherwise.

        // const assessments1 = [
        //   { number: 1, score: 60 },
        //   { number: 2, score: 90 },
        //   { number: 3, score: 80 },
        //   { number: 4, score: 100 },
        //   { number: 5, score: 85 }
        // ];

        // isPassing(assessments1) // => true
        // const assessments2 = [
        //   { number: 1, score: 60 },
        //   { number: 2, score: 20 },
        //   { number: 3, score: 45 }
        // ];

        // isPassing(assessments2) // => false

//O(1)
function isPassing(assessments) {
    let score = 0;

    for (let i = 0; i < assessments.length; i++) {
         let obj = assessments[i];
         score += obj.score;
    }
    return score / assessments.length >= 70;
}


        // valueConcat
        // Write a function valueConcat(array, obj) that takes in an array and object The function should return a new array where each element is concatenated with it's corresponding value from the object.

        // Examples:

        // const arr = ['alex', 'maurice', 'meagan', 'ali'];
        // const obj = { alex: 'bronca', ali: 'harris' }
        // valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

        // valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ]

//O(n)        
function valueConcat(array, obj) {
    let arryConcat = [];

    for (let i = 0; i < array.length; i++) {
         let k = array[i];
         let newElem = k + (obj[k] || '');
         arryConcat.push(newElem);
    }

    return arryConcat;
}

    
        // threeInARow
        // Write a function threeInARow(arr) that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively. The function should return false otherwise.

        // threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
        // threeInARow([10, 9, 20, 33, 3, 3]);  // => false;

//O(n);
function threeInARow(arry) {
    for (let i = 0; i < arry.length - 2; i++) {
         if ( arry[i] === arry[i + 1] &&  arry[i + 1] === arry[i + 2]) {
             return true;
         }
    }

    return false;
}        

        // variableNameify
        // Write a function variableNameify(words) that takes in an array of words. The function should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.

        // Examples:

        // variableNameify(['is', 'prime']) // => 'isPrime'
        // variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
        // variableNameify(['MaX', 'VALUE']) // => 'maxValue'

//O(n)
function variableNameify(words) {
    let wordsCap = [words[0].toLowerCase()];

    for (let i = 1; i < words.length; i++) {
        let word = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
         wordsCap.push(word);
    }

    return wordsCap.join('');
}    



        // threeIncreasing
        // Write a function threeIncreasing(arr) that takes in an array of numbers and returns true if the array contains 3 consecutive numbers in increasing order. The function should return false otherwise. Note that the 3 consecutive numbers should be increasing by 1, so the the second number is 1 greater than the first, and the third number is 1 greater than the second.

        // threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
        // threeIncreasing([7, 2, 4, 5, 2, 1, 6]);  // => false

//O(n)
function threeIncreasing(arry) {

    for (let i = 0; i < arry.length - 2; i++) {
            if ( arry[i] + 1 === arry[i + 1] &&  arry[i + 1] + 1=== arry[i + 2]) {
                return true;
            }
        }

    return false;
}


        // reverse2D
        // Write a function reverse2D(array) that takes in a 2D array of strings. The function should return a string representing the elements of the array in reverse order.


        // const arr1 = [
        //   ['a', 'b', 'c', 'd'],
        //   ['e', 'f'],
        //   ['g', 'h', 'i']
        // ];

        // reverse2D(arr1) // => 'ihgfedcba'
        // const arr2 = [
        //   ['Julian', 'Matt', 'Mike'],
        //   ['Oscar', 'Patrick']
        // ];
        // reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'


//O(n)
function reverse2D(arry) {
    let strReverse = '';
    for (let i = 0; i < arry.length; i++) {
         let arryInner = arry[i];
         word = arryInner.reduce( (acc, elem) => {return elem + acc}, '')
         strReverse = word + strReverse;
    }

    return strReverse;
}


        // reverb
        // Write a function reverb(word) that takes in a word string and returns the word with all characters after the last vowel repeated.
        // reverb('running');  // => 'runninging'
        // reverb('wild');  // => 'wildild'
        // reverb('debugged');  // => 'debuggeded'
        // reverb('my');  // => 'my'


//O(n)
function reverb(word) {
    let vowels = 'aeiouAEIOU';

    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
         if (vowels.includes(char)) {
             return word + word.slice(i);
         }
    }

    return word;
}        


        // countRepeats
        // Write a function countRepeats(string) that takes in a string and returns the number of letters that appear more than once in the string. You may assume the string contains only lowercase letters. Count the number of letters that repeat, not the number of times they repeat in the string.

        // countRepeats('calvin'); // => 0
        // countRepeats('caaaalvin'); // => 1
        // countRepeats('pops'); // => 1
        // countRepeats('mississippi'); // => 3
        // countRepeats('hellobootcampprep'); // => 4

//O(n)
function countRepeats(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let arryAnte = string.slice(0, i).split('');

        if (arryAnte.filter(e => e === char).length === 1){ 
            count++;
        }
    }

    return count;
}


        // pairsToString
        // Write a function pairsToString(arr) that takes in an array of pairs. The function should return a string corresponding to the pairs.

        // Examples:

        // const array1 = [
        //   ['a', 3],
        //   ['b', 1],
        //   ['c', 2]
        // ];
        // pairsToString(array1);  // => 'aaabcc'

        // const array2 = [
        //   ['f', 1],
        //   ['o', 2],
        //   ['d', 1],
        //   ['!', 1]
        // ];
        // pairsToString(array2);  // => 'food!'

  //O(n)
  function pairsToString(arry) {
      let string = '';

      for (let i = 0; i < arry.length; i++){
           let char = arry[i][0];
           let number = arry[i][1];
           string += char.repeat(number);
      }

      return string;
  } 

     
        //   countAdjacentSums
        // Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

        // countAdjacentSums([1, 5, 1], 6) // => 2
        // countAdjacentSums([7, 2, 4, 6], 7) // => 0
        // countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3

//O(n)
function countAdjacentSums(arr, n) {
   let count = 0;

   for(let i = 0; i < arr.length - 1; i++) {
       if (arr[i] + arr[i + 1] === n) {
           count++;
       }
   }

   return count;
}    
        // signFlipCount
        // Write a function signFlipCount(nums) that takes in an array of numbers as arguments. The function should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative.


        // signFlipCount([5, 6, 10, 3]); // => 0
        // signFlipCount([-12, 0, -3, -5]); // => 0
        // signFlipCount([-12, 10, -3, -5]); // => 2
        // signFlipCount([1, -2, -3, -4]); // => 1
        // signFlipCount([-1, 11.3, -3, 100]); // => 3

//O(n)
function signFlipCount(arry) {
    let count = 0;
    for (let i = 0; i < arry.length - 1; i++) {
         if(arry[i] * arry[i + 1] < 0) {
             count++;
         }
    }
    return count;
}

        //   powerSequence
        // Write a function powerSequence(base, length) that takes in two numbers, base and length. The function should return an array containing a power sequence with the given length. Assume that the length is at least 1.

        // The first number of a power sequence begins with base. The second number of the sequence is the product between the first number and the base. The third number of the sequence is the product between the second number and the base...

        // Examples:

        // powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
        // powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
        // powerSequence(8, 3);  // => [ 8, 64, 512 ]

// O(n)
function powerSequence(base, length) {
    let arry = [base];

    for (let i = 1; i < length; i++) {
        let elem = arry[i - 1] * base;
        arry.push(elem);
    }

    return arry;
}

        // collapseString
        // Write a function collapseString(str) that takes in a string as an argument. The function should return the string where 'streaks' of consecutive characters are collapsed to a single character.

        // Hint: use the keyword continue

        // collapseString('apple'); // => 'aple'
        // collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
        // collapseString('hello   app academy'); // => 'helo ap academy'

//O(n)
function collapseString(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if (i == 0) {
            newStr = str[i];
            continue;
        }
        if(str[i] !== str[i -1]) {
           newStr += str[i];  
        }

    }

    return newStr;
}        

        // oddWordsOut
        // Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.


        // oddWordsOut('go to the store and buy milk');  // => 'go to milk'
        // oddWordsOut('what is the answer');  // => 'what is answer'

//O(n)
function oddWordsOut(sentence) {
    return sentence.split(' ').filter( e => e.length % 2 === 0).join(' ');
}      


// mindPsAndQs
// Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

// Hint: Use two variables. One to track the length of the current streak and another to track the length of the longest streak so far. Think of using a strategy similar to maxValue. This can also be solved using a single loop!

// Nested loops not needed!


// mindPsAndQs('BOOTCAMP');  // => 1
// mindPsAndQs('APCDQQPPC');  // => 4
// mindPsAndQs('PQPQ');  // => 4
// mindPsAndQs('PPPXQPPPQ');  // => 5

//O(n)
function mindPsAndQs(str) {
    let countMax = 0;
    let countCrt = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === 'P' || char === 'Q') {
            countCrt++;

            if (countCrt > countMax) {
                countMax = countCrt;
            }
        } else {
            countCrt = 0;
        }
    }

    return countMax;
}


// commonFactors
// Write a function commonFactors(num1, num2) that returns an array that contains the common factors between both numbers. A factor is a number that divides another number with no remainder.


// commonFactors(12, 50);  // => [ 1, 2 ]
// commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
// commonFactors(11, 22);  // => [ 1, 11 ]
// commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]

//O(n)
function commonFactors (num1, num2) {
    let arry = [];
    let num = Math.min(num1, num2);

    while(num > 0) {
        if( num1 % num === 0 && num2 % num ===0) {
            arry.unshift(num);
        }
        num--;
    }
return arry;
}


// commonPrimeFactors
// Write a function commonPrimeFactors(num1, num2) that takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers. A factor is a number that divides another number without resulting in a remainder.


// commonPrimeFactors(12, 50);  // => [ 2 ]
// commonPrimeFactors(6, 24);  // => [ 2, 3 ]
// commonPrimeFactors(11,22);  // => [ 11 ]
// commonPrimeFactors(45, 60);  // => [ 3, 5 ]

//O(n)
function commonPrimeFactors(num1, num2) {

    let arry = [];
    let num = Math.min(num1, num2);

    while(num > 0) {
        if( num1 % num === 0 && num2 % num ===0 && isPrime(num)) {
            arry.unshift(num);
        }
        num--;
    }
return arry;
}


        // splitHalfArray
        // Write a function splitHalfArray(array) that takes in an array as an argument and returns two halves of that array split in the middle. If the array has an odd number of elements, then the middle element should be excluded.

        // splitHalfArray([1, 2, 3, 4, 5]);
        //   // => [ [ 1, 2 ], [ 4, 5 ] ]

        // splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
        //   // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

//O(n)
function splitHalfArray(arry) {
    let middle = parseInt(arry.length / 2);

    return [arry.slice(0, middle), arry.slice(middle)];
}

        // threeUniqueVowels
        // Write a function threeUniqueVowels(string) that takes in a string and returns true if the string contains at least three different vowels.

        // const VOWELS = ['a', 'e', 'i', 'o', 'u'];
        // Examples:

        // threeUniqueVowels('delicious');  // => true
        // threeUniqueVowels('the bootcamp');  // => true
        // threeUniqueVowels('bootcamp');  // => false
        // threeUniqueVowels('dog');  // => false
        // threeUniqueVowels('go home');  // => false

 //O(n)
 function threeUniqueVowels(str) {
     let vowels ='aeiouAEIOU';
     return str.split('').reduce( (acc, c) =>  {if (vowels.includes(c) && !acc.includes(c)) { 
                                                    return acc + c;
                                                } else {
                                                    return acc;
                                                }
                                           
                                                }, '').length >=3;
 }       

        //  vowelShift
        // Write a function vowelShift(sentence) that takes in a sentence string. The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.

        // const VOWELS = ['a', 'e', 'i', 'o', 'u'];
 

        // vowelShift('bootcamp');  // => 'buutcemp'
        // vowelShift('hello world');  // => 'hillu wurld'
        // vowelShift('on the hunt');  // => 'un thi hant'

 //O(n)
 function vowelShift(sentence) {
     let vowels = 'aeiou';
     let newWord = '';

     for (let i = 0; i < sentence.length; i++) {
         let char = sentence[i];
         if (vowels.includes(char)) {
             let IdxNextVowel = (vowels.indexOf(char) + 1 ) % 5;
            newWord += vowels[IdxNextVowel];
         } else {
             newWord += char;
         }
     }

     return newWord;
 }       


        //  hasSymmetry
        // Write a function hasSymmetry(array) that takes in an array. The function should return true if the array has symmetry, false otherwise. For an array to have symmetry, it should be the same forwards and backwards.

        // TIP: In JavaScript, it is not possible to compare arrays for equality with ===. In other words, [1, 2, 3] === [1, 2, 3] evaluates to false.


        // hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
        // hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
        // hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
        // hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false

//O(n)
function hasSymmetry (arry) {
    let middle = parseInt(arry.length / 2);

    for (let i = 0; i < middle; i++) {
        let elem1 = arry[i];
        let elem2 = arry[arry.length -1 - i];

        if (elem1 !== elem2) {
            return false;
        }
    }

    return true;
}

        // evenSumArray
        // Write a function evenSumArray(array) that takes in an array of numbers and returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.

        // evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
        // evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]

//O(n)        
function evenSumArray(arry) {
    let newArry = [];

    for(let i = 0; i < arry.length; i++) {
        let elem = arry[i];
        newArry.push(sunOfEvenLessThenN(elem));
         
    }

    return newArry;

}

function sunOfEvenLessThenN(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }

    return sum;
}



        // numsToWords
        // Write a function numsToWords(numString) that takes in a string representing a number. The function should return a new string where each digit character is replaced with it's "word" representation. Assume the input string only contains numeric characters.

        // numsToWords('42') // => 'FourTwo'
        // numsToWords('123') // => 'OneTwoThree'
        // numsToWords('159598') // => 'OneFiveNineFiveNineEight'
//O(n)
function numsToWords(numStr) {
    let newASentence = ''
    let arry = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

    for (let i = 0; i < numStr.length; i++) {
         let n = numStr[i];
         newASentence += arry[n];
    }

    return newASentence;
}


        // moreDotLessDash
        // Write a function moreDotLessDash(str) that takes in a string and returns the true if the string contains more dots ('.') than dashes ('-'), false otherwise.


        // moreDotLessDash('2-D arrays are fun. I think.');  // => true
        // moreDotLessDash('.-.-.');  // => true
        // moreDotLessDash('.-');  // => false
        // moreDotLessDash('..--');  // => false


//O(n)
function moreDotLessDash(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {

        if (str[i] === '.') {
            count++;
        }
         if (str[i] === '-') {
            count--;
        }
    }

    return count > 0;
}        

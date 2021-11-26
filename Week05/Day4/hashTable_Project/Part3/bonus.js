const HashTable = require('../Part1_hash-table/hash-table');


        //Given a string, return the kth most frequent character in the string.
        // kth('aaabbc', 1);     //  => 'a'
        // kth('aaabbc', 2);     //  => 'b'
        // kth('aaabbc', 3);     //  => 'c'
function kth (string, nr) {
    let obj = {};
    let arry = [];

    for (let i = 0; i < string.length; i++) {
         let elem = string[i];
         obj[elem] = (obj[elem] || 0) + 1;

    }
   
    for(let k in obj) {
        arry.push(obj[k]);
       [k, obj[k]] = [obj[k], k];
    }

    arry.sort();
    k = arry[arry.length - nr];

    return obj[k];
}



        //Imagine the standard alphabet order (abc...xyz) is rearranged. 
        //Given a string and a new alphabet order, determine whether the characters in the string appear in lexicographically increasing order. 
        //Solve this in O(m + n) time.
        // newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz');     // => true
        // newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz');     // => false
        // newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz');     // => true
//O(n)
function newAlphabet(string, alphabet) {
    let idxAlphabetOld = -1;

    for(let i = 0; i < string.length; i++) {
        let char = string[i];
        let idxAlphabet = alphabet.indexOf(char);

        if (idxAlphabet < idxAlphabetOld) {
            return false;
        }
          
        idxAlphabetOld = idxAlphabet;
    }
return true;    
}

        
        // console.log(newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz'));     // => true
        // console.log(newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz'));     // => false
        // console.log(newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz'));     // => true
        


        //Given a string, determine the length of the longest palindrome that can be built with those letters. 
        //Solve this in O(n) time.

        //longestPalindrome("abccccdd");     //  => 7 because the palindrome "dccaccd" can be built.
                                            

function isPalindrome(word) {
    let len = word.length;

    for (let i = 0; i < len; i++) {
         if (word[i] !== word[len - 1 - i]) {
             return false;
         }
    }

    return true; 
}

        //console.log(isPalindrome('ana'));
        //console.log(isPalindrome('anna1'));
 // O(n2)
function longestPalindrome(string) {
   let objLetters = {};
   let count = 0;

   for (let i = 0; i < string.length; i++) {
       let char = string[i];
       objLetters[char] = (objLetters[char] || 0) + 1;
   }

   for (k in objLetters) {
       count += parseInt(objLetters[k] / 2) * 2;
   }

   if (string.length > count ) {count++;}
 return count;
}

        /* // solution with no moving letters
        function longestPalindrome(string) {
            let len = string.length;
            longestWordLen = 0;
        

            for (let i = 0; i < len; i++) {
            for(let lenWord = len - 1; lenWord >= 0; lenWord--) {
                let word = string.substr(i, lenWord);

                if (isPalindrome(word) && word.length > longestWordLen) {
                    longestWordLen = word.length; 
            
                }

            }
            }

            return longestWordLen;
        }
        */

        //console.log(longestPalindrome("abccccdd"));   
        //console.log(longestPalindrome("ab cccc dd"));   


        //Given a string, find the length of the longest substring without repeating characters.
        // Solve this in O(n) time.

        //longestSubstr("abcabcbb");     //  => 3, where the longest substring is "abc"
        //longestSubstr("bbbbb");     //  => 1, where the longest substring is "b"


//O(n)
function longestSubstr(string) {
    let longWordIdxStart = 0;
    let longWordIdxEnd = 0;

    for(let i = 0; i < string.length; i++) {
        let char = string[i];
        let repetedIdx = string.slice(0, i).indexOf(char);

        if (repetedIdx > 0) {
            if(repetedIdx - longWordIdxEnd >  longWordIdxEnd - longWordIdxStart) {
                longWordIdxStart = longWordIdxEnd;
                longWordIdxEnd = repetedIdx;
            }
        }

    }

return longWordIdxEnd - longWordIdxStart + 1;    
}

        // console.log(longestSubstr("abcabcbb"));     //  => 3, where the longest substring is "abc"
        // console.log(longestSubstr("bbbbb"));     //  => 1, where the longest substring is "b"
        // console.log(longestSubstr("ana are mere si pere"))


        //Given an array of integers, return the length of the longest subarray where the difference between its maximum value and its minimum value is at most 1. 
        //Solve this in O(n) time.  

        //maxSubarr([1,3,2,2,5,2,3,7]);     // => 5 because the longest subarray is [3,2,2,2,3]
        //maxSubarr([1,1,1,1,3]);     // => 4 because the longest subarray is [1,1,1,1]


function  maxSubarr(arry) {
    let objArry = {};
    let start, end, kAnte, count = 0;

  
    for( let i = 0; i < arry.length; i++) {
         let elem = arry[i];
         objArry[elem] = (objArry[elem] || 0) + 1;       
    }

    for (k in objArry) {

        if (start === undefined) {
            start = k;
            count = objArry[k]
            continue;
        } 

        if (end === undefined) {
            end = k;
            if(Math.abs(end - start) === 1) {
               count += objArry[end];
            } else {
                if ( objArry[end] > objArry[start]) {
                     count = objArry[end]; 
                     start = k;
                     end = undefined;
                }
            }
            kAnte = k;
            continue;

        } 

        if (Math.abs(k - kAnte) === 1 ) {
            if(count < objArry[end] + objArry[k]) {
              count = objArry[end] + objArry[k];
              start = kAnte;
              end = k;
            }
         
        } else {
            if ( objArry[k] > objArry[kAnte]) {
                     count = objArry[k]; 
                     start = k;
                     end = undefined;
                }
        }

        kAnte = k;    
        
    }
    return count;
}    
/*       
//O(n2)
function  maxSubarr(arry) {
    let objArry = {};
    let start, end, kAnte, count = 0;

    arry.sort();
    for( let i = 0; i < arry.length; i++) {
         let elem = arry[i];
         objArry[elem] = (objArry[elem] || 0) + 1;       
    }

    for (k in objArry) {

        if (start === undefined) {
            start = k;
            count = objArry[k]
            continue;
        } 

        if (end === undefined) {
            end = k;
            if(end - start === 1) {
               count += objArry[end];
            } else {
                if ( objArry[end] > objArry[start]) {
                     count = objArry[end]; 
                     start = k;
                     end = undefined;
                }
            }
            kAnte = k;
            continue;

        } 

        if (k - kAnte === 1 ) {
            if(count < objArry[end] + objArry[k]) {
              count = objArry[end] + objArry[k];
              start = kAnte;
              end = k;
            }
         
        } 

        kAnte = k;    
        
    }
    return count;
}       
*/
        // let r = maxSubarr([1,1,1,1,3]);
        // console.log(r);

        // r = maxSubarr([1,3,2,2,5,2,3,7]);
        // console.log(r);


        //Coin Change -  
        //You are given coins of different denominations and a total amount of money amount. 
        //Write a function to compute the fewest number of coins that you need to make up that amount. 
        //If that amount of money cannot be made up by any combination of the coins, return -1.

       //You may assume that you have an infinite number of each kind of coin.

       //const coins = [1, 5, 10, 25];
       // const coins2 = [5];

      // coinChange(coins, 11);      // => 2, 10 + 1 = 11
      // coinChange(coins2, 3);      // => -1
      // coinChange(coins2, 0);      // => 0

    

 function coinChange(coins, total, number = 0) {
    
        if (total === 0 || coins.length === 0) {
            return number;
        } 
    
        let coin = coins.slice(-1);
        let newRest = total % coin;
        number += parseInt(total / coin);
             
        return coinChange(coins.slice(0, coins.length - 1), newRest, number);   
    } 

        // Climbing Steps
        // You are climbing a staircase. It takes n steps to reach the top.
        // Each time you can either climb 1, 2, or 3 steps. In how many distinct ways can you climb to the top?


 function climbingSteps(n) {
     
 }       

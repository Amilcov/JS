// Group Anagrams
// Given an array of strings, group the anagrams together. You can return the answer in any order.

function groupAnagrams(arr) {

   let result = arr.sort( (a,b) => compare(a, b));
   let len = result.length;
   let group = [];

   for (let i = 0; i < len; i++) {
       let elem = result[i];
       if(!i) {
             group.push([elem]);
       } else {
             if (compare(elem , result[i - 1])  === 1) {
                 group.push([elem]);
             } else {
                 group[group.length - 1].push(elem);
             }
       }
       
   }

   return group;
}

function compare(a, b) {
   if (a.split('').sort().join('') === b.split('').sort().join('') ) {
      return -1;
   } else {
       return 1;
   }
   

}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));     //  => [["bat"],["nat","tan"],["ate","eat","tea"]]
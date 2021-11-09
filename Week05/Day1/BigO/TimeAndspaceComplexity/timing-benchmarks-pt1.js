// Adds up positive integers from 1-n
function addNums(n) {

  let sum = 0;
  for (let i = 1; i <= n; i++) {
      sum += i;
  }

  return sum;
}
// Time Complexity: O(n)
// Space Complexity: O(1)

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let sum = 0;
  for(let i = 0; i <= n; i++) {
      sum += addNums(i); 
  }
  return sum;
}

// Time Complexity: O(n2)
// Space Complexity: O(1)


module.exports = [addNums, addManyNums];
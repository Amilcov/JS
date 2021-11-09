const [addNums, addManyNums] = require("./timing-benchmarks-pt1.js");


// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let arry = [];
  let n = 0;

  for(let i = 0; i < 10; i++) {
      n += increment;
      arry.push(addNums(n));
  }

  return arry;
}
// Time Complexity: O(n2)
// Space Complexity: O(1)

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {

  // Fill this in
  let arry = [];
  let n = 0;

  for(let i = 0; i < 10; i++) {
      n += increment;
      arry.push(addManyNums(n));
  }

  return arry;
}

// Time Complexity: O(n2)
// Space Complexity: O(1)


module.exports = [addNums10, addManyNums10];
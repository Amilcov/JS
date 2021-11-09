const [addNums, addManyNums] = require("./timing-benchmarks-pt1.js");

function addNums10Timing(increment) {

  // Copy your `addNums10` code here
  // Then, add timing code
 
 
 
  let arry = [];
  let n = 0;
  let start;
  let end;
  console.time("Timer1");
  for(let i = 1; i <= 10; i++) {
      n += increment;

      start = Date.now();
      arry.push(addNums(n));
      end = Date.now();
      console.log(`Time execution ${i} ${end - start}`);
      console.timeLog("Timer1");
  }

  console.timeEnd("Timer1");
}


function addManyNums10Timing(increment) {

  // Copy your `addManyNums10` code here
  // Then, add timing code

 console.time("Timer2");

  let arry = [];
  let n = 0;
  let start;
  let end;

  for(let i = 1; i <= 10; i++) {
      n += increment;
      start = Date.now();
      arry.push(addManyNums(n));
      end = Date.now();
      console.log(`Time execution ${i} ${end - start}`);
      console.timeLog("Timer2");
  }

  console.timeEnd("Timer2");
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);

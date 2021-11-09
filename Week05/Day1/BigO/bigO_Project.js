function randomNumberArr(max) {
  const res = new Array();

  for (let i = 0; i < max; i++) {
    const randomNumber = Math.floor(Math.random() * Math.floor(max));

    res.push(randomNumber);
  }

  return res;
}


//T: O(n) 
//S: O(n)
function pushTest(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  return arr;
}

let n = 100000;
console.time(`pushTest(${n}): `);
pushTest(n);
console.timeEnd(`pushTest(${n}): `);


//T: O(n) 
//S: O(1)
function popTest(arr) {
  const n = arr.length;

  for (let i = 0 ; i < n ; i++) {
    arr.pop();
  }
    
  return arr;
}

let arry = randomNumberArr(10);
//console.time(`popTest(${arry}): `);
console.time(`popTest`);
popTest(arry);
//console.timeEnd(`popTest(${arry}): `);
console.timeEnd(`popTest`);


//map
//T: O(n) 
//S: O(n)
function mapTest(arry) {
  return arry.map(e => e + 10);
}

arry = randomNumberArr(10);
console.time(`mapTest`);
mapTest(arry);
console.timeEnd(`mapTest`);

//filter
//T: O(n) 
//S: O(n)
function filterTest(arry) {
  return arry.filter(e => e > 5);
}

arry = randomNumberArr(10);
console.time(`filterTest`);
filterTest(arry);
console.timeEnd(`filterTest`);


//reduce
//T: O(n) 
//S: O(1)
function reduceTest(arry) {
  return arry.reduce(e => e + 10, 0);
}

arry = randomNumberArr(10);
console.time(`reduceTest`);
reduceTest(arry);
console.timeEnd(`reduceTest`);


//every
//T: O(n) 
//S: O(1)
function everyTest(arry) {
  return arry.every(e => e  > 5);
}

arry = randomNumberArr(10);
console.time(`everyTest`);
everyTest(arry);
console.timeEnd(`everyTest`);


//unshift
//T: O(n) 
//S: O(n)
function unshiftTest(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.unshift(i);
  }
  
  return arr;
}

console.time(`unshift`);
unshiftTest(2);
console.timeEnd(`unshift`);


//shift
//T: O(n) 
//S: O(1)
function shiftTest(arr) {
  const n = arr.length;

  for (let i = 0 ; i < n ; i++) {
    arr.shift();
  }

  return arr;
}

arry = shiftTest(2);
console.time(`shift`);
shiftTest(arry);
console.timeEnd(`shift`);
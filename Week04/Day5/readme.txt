For the first problem rewrite ES6 classes using ES5 syntax. You should test your code to make sure it works!

For the second problem monkeypatch an Array class with custom isEqual method. It should check whether values inside two arrays are equal.

const result = [1, 2, 3].isEqual([1, 3, 2]);
const result2 = [1, 2, 3].isEqual([1, 2, 3]);
console.log(result, result2); // prints 'false true'

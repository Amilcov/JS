// 1.

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   bark() {
//     console.log("Bark");
//   }

//   static diet() {
//     return "carnivore";
//   }
// }

function Dog(name, age) {
    this.name = name;
    this.age = age
}

Dog.prototype.bark = function() {
    console.log("Bark")
};

Dog.diet = function() {
    return 'carnivore';
}

let laica = new Dog('Laica', 3);
laica.bark();
console.log(Dog.diet());

// class Person {
//   constructor(name, age, dogs = []) {
//     this.name = name;
//     this.age = age;
//     this.dogs = dogs;
//   }

//   addDog(dog) {
//     if (!(dog instanceof Dog)) {
//       throw new TypeError("Can only add dogs!");
//     }
//     this.dogs.push(dog);
//   }

//   walkDogs() {
//     this.dogs.forEach((dog) => {
//       console.log(`walking ${dog.name}`);
//     });
//   }
// }

function Person (age, name, dogs = []) {
        this.name = name;
        this.age = age;
        this.dogs = dogs;
}

Person.prototype.addDog = function(dog) {
    if (!(dog instanceof Dog)) {
       throw new TypeError("Can only add dogs!");
    }
    this.dogs.push(dog);
}

Person.prototype.walkDogs = function() {
    this.dogs.forEach((dog) => {
       console.log(`walking ${dog.name}`);
    });
}

let abraham = new Person(100, 'Abraham');
abraham.addDog(laica);
abraham.walkDogs();

// 2. Monkeypatch an array class with isEqual method
Array.prototype.isEqual = function(arry) {
     console.log(this)
    return arry.toString() === this.toString();
}

const result = [1, 2, 3].isEqual([1, 3, 2]);
const result2 = [1, 2, 3].isEqual([1, 2, 3]);
console.log(result, result2); // prints 'false true'

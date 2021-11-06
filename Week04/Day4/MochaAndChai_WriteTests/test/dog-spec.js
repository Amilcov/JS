const chai = require("chai");
const expect = chai.expect;

const Dog = require("../problems/dog.js");

describe("Dog", function() {

  // Fill out tests here
  it("should create an instance of class Dog", function(){
     const dog = new Dog();
     expect(dog).to.exist;
  })

  it("should set name on creation", function(){
    const dog = new Dog("Grivei");
    expect(dog.name).to.equal("Grivei");
  })

  it("should set age on creation", function(){
    const dog = new Dog("Grivei", 4);
    expect(dog.age).to.equal(4);
  });

  it("Method haveBirthay should increment the age", function(){
      const dog = new Dog("Grivei", 4);
      expect(dog.haveBirthday()).to.equal(5);
  }) 

  it("Method learnTrick should add the trick to the tricks dog can do", function(){
      const dog = new Dog("Grivei", 4, ["sleep", 'smile']);
      dog.learnTrick("bring stick");
      expect(dog.tricks).to.have.members(["sleep", "smile", "bring stick"]);
  });

  it("Method learnTrick should add up one trick to the number of tricks dog can do", function(){
    const dog = new Dog("Grivei", 4, ["sleep"]);
    dog.learnTrick("bring stick");
    expect(dog.tricks.length).to.equal(2);
  });


  it("Method learnTrick should return a number that is 1 more higher then tricks the dog already knew", function(){
    const dog = new Dog("Grivei", 4, ["sleep"]);
    expect(dog.learnTrick("bring stick")).to.equal(2);
  });

 it("Method numTricks should return the number of tricks that the dog can dow", function(){
    const dog = new Dog("Grivei", 4, ["sleep"]);
    dog.learnTrick("bring stick");
    expect(dog.numTricks()).to.equal(2);
  });



});



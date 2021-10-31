class Employee {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }

    sayName() {
        console.log(`My name is: ${this.name}`)
    }

    sayOccupation(){
        console.log(`My occupation is: ${this.occupation}`);
    }
   
}


let employee1 = new Employee('Ann', 'photographer');

setTimeout(employee1.sayName.bind(employee1), 2000);
setTimeout(employee1.sayOccupation.bind(employee1), 3000);

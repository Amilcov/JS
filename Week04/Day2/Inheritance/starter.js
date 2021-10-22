class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce(){
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
    }

    static introducePeople(persons) {
        if (typeof persons !== Array) {
            console.log('Error of type of argument function. The  argument must be an array. ');
        }

        persons.map(person => person.introduce());
    }
}


class Student extends Person{
    constructor(firstName, lastName, age, subject, GPA){
        super(firstName, lastName, age);
        this.subject = subject;
        this.GPA = GPA;
    }

    static compareGPA(student1, student2) {
        let message;
        if (student1.GPA > student2.GPA) {
            message = `${student1.firstName} ${student1.lastName} has the higher GPA`;
        } else if (student1.GPA < student2.GPA) {
            message = `${student2.firstName} ${student2.lastName} has the higher GPA`;
        } else {
           message = `Both students have the same GPA`;
        }
        console.log(message);

    }
}


let s1 = new Student('Elon', 'Musk', 50, 'math', 599);
let s2 = new Student('Nadia', 'Comaneci', 60, 'sport', 1000);
Student.compareGPA(s1, s2);
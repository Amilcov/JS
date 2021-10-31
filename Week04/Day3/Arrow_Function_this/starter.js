// ARROW FUNCTIONS AND CONTEXT

class User {
  constructor(name) {
    this.name = name;
    this.changeName = (newName) => this.name = newName;
  }
  
}

const michelle = new User("Michelle");


function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}

greetAfterNameChange(michelle.changeName, 'Elle');



const sayHelloTo = require('./sayHelloTo');


sayHelloTo("Buzz");

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

module.exports = giveMessageToMrsPotato;

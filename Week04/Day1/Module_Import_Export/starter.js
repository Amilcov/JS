// 2091 Short (15-20 minute) Pair programming exercise covering importing and 
// exporting using common JS.

// Write Common JS import and export statements for every file that are required
// to allow them all to run without errors.
// Call node starter.js to test if you have completed this exercise successfully.

const sayHelloTo = require('./sayHelloTo');
const [msg1, msg2, msg3] = require('./messages');
const giveMessageToMrsPotato = require('./giveMessageToMrsPotato');

sayHelloTo("Mr. Potato")
giveMessageToMrsPotato(msg1)
giveMessageToMrsPotato(msg2)
giveMessageToMrsPotato(msg3)

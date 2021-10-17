

const rl = require("readline");

let maxNumber, minNumber, secretNumber, maxGussingNo;


const terminalInterface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askLMaxGuessNo = (answer) => {
    maxGussingNo = Number(answer);
    terminalInterface.question('Enter a max number: ', askMaxNumber);
}

const askMaxNumber = (answer) => {
    maxNumber = Number(answer);
    terminalInterface.question('Enter a min number: ', askMinNumber);
}
7
const askMinNumber = (answer) => {
    minNumber = Number(answer);
    generateSecretNumber();
    terminalInterface.question('Enter a number: ', askGuess);
}

function generateSecretNumber() {
    console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}...`);
    secretNumber = minNumber + parseInt(Math.random() * 1000 % (maxNumber - minNumber + 1));  
}

function checkNumber(userNnumber) {
    maxGussingNo--;
    if (Number(userNnumber) === secretNumber) {
        
        console.log('Corect!');
        console.log('YOU WON!');
        return true;

      } else  if(userNnumber < secretNumber){
        console.log('To low');
      } else {
        console.log('To high');
      }
      return false;
}

const askGuess = (answer) => {

    if (checkNumber(answer) || maxGussingNo === 0) {
        terminalInterface.close();
        if (maxGussingNo === 0) {
            console.log('Maximum numbers of guessing was ');
        }
    } else {
        terminalInterface.question('Enter a number: ', askGuess);
    }
}

terminalInterface.question('Enter the maximum number for guessing: ', askLMaxGuessNo); 
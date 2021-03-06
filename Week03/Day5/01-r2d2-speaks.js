/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.
    
    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms

    There are no mocha tests for this code.
    Run the following two lines beneath the function
    to see if your code demonstrates the expected behavior.
   
*/

function r2d2Speaks(code) {
   return delayPrint(code, 0);
}


function delayPrint(code, i) {

   let number = code[i];
   let message, delay;

   if (number === 0) {
     message = 'beep';
     delay = 400;
   } else {
     message = 'boop';
     delay = 800;  
   }

    setTimeout( () => {
         console.log(message);
         i++;
         if (i < code.length) {
            delayPrint(code, i);  
         } else {
             return;
         }
    }, delay);

}

let code = [0, 1, 1, 0];
r2d2Speaks(code);


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}


// Tic-tac-toe solver

// DRY UP THIS CODE
function checkWin(grid) {

//Solution with DRY 
  
 let checkHorizontalWin = (sign) => {

     for (let i = 0; i < grid.length; i++) {
          let row = grid[i];
          let countSigns = row.filter(elem => elem === sign);

          if (countSigns.length === row.length) {
             return true;
          }
    }

    return false;
   }


let checkVerticalWin = (sign) => {

    for (let col = 0; col < grid[0].length; col++) {
         let  colFull = true;    
         for (let row = 0; row < grid.length; row++) {
              let elem = grid[row][col];

               if (elem !== sign){
                   colFull = false
                   break;
               }
        }
        if (colFull) {
           return true;
        }
     }

    return false;
 }


   let checkOneDiagonalWin = (sign) => {

     for (let i = 0; i < grid.length; i++) {
           let elem = grid[i][i];

           if (elem !== sign){
              return false;
           }

     }
     
    return true;
 }


 let checkSecondDiagonalWin = (sign) => {

     for (let i = 0; i < grid.length; i++) {
           let elem = grid[i][grid.length - 1 - i ];

           if (elem !== sign){
              return false;
           }

        }
     
    return true;
 }

  let checkTies = () => {
       
    for (let i = 0; i < grid.length; i++) { 
        for (let j = 0; j < grid[i].length; j++) { 
             let elem = grid[i][j];  
            
             if (elem === ' ') {
                      console.log('elem')
                return false;  
                  console.log('elem2')  
             }
        }
      }
     
      return true;
  }

 
   if (checkHorizontalWin('X')) {return 'X'};
   if (checkVerticalWin('X')) {return 'X'} 
   if (checkOneDiagonalWin('X')) {return 'X'}
   if (checkSecondDiagonalWin('X')) {return 'X'}
   

   if (checkHorizontalWin('O')) {return 'O'};
   if (checkVerticalWin('O')) {return 'O'};
   if (checkOneDiagonalWin('O')) {return 'O'}
   if (checkSecondDiagonalWin('O')) {return 'O'}

   if (checkTies()) {return 'T'}
   return false;

  
   //___________With no DRY___________
   // Check horizontal X wins
//   if (grid[0][0] === 'X' && grid[0][1] === 'X' && grid[0][2] === 'X') return 'X';
//   if (grid[1][0] === 'X' && grid[1][1] === 'X' && grid[1][2] === 'X') return 'X';
//   if (grid[2][0] === 'X' && grid[2][1] === 'X' && grid[2][2] === 'X') return 'X';

   
  // Check vertical X wins
//   if (grid[0][0] === 'X' && grid[1][0] === 'X' && grid[2][0] === 'X') return 'X';

//   if (grid[0][1] === 'X' && grid[1][1] === 'X' && grid[2][1] === 'X') return 'X';

//   if (grid[0][2] === 'X' && grid[1][2] === 'X' && grid[2][2] === 'X') return 'X';


  // Check diagonal X wins
 //  if (grid[0][0] === 'X' && grid[1][1] === 'X' && grid[2][2] === 'X') return 'X';

//   if (grid[0][2] === 'X' && grid[1][1] === 'X' && grid[2][0] === 'X') return 'X';


  // Check horizontals
//   if (grid[0][0] === 'O' && grid[0][1] === 'O' && grid[0][2] === 'O') return 'O';

//   if (grid[1][0] === 'O' && grid[1][1] === 'O' && grid[1][2] === 'O') return 'O';

//   if (grid[2][0] === 'O' && grid[2][1] === 'O' && grid[2][2] === 'O') return 'O';


  // Check verticals
//   if (grid[0][0] === 'O' && grid[1][0] === 'O' && grid[2][0] === 'O') return 'O';

//   if (grid[0][1] === 'O' && grid[1][1] === 'O' && grid[2][1] === 'O') return 'O';

//   if (grid[0][2] === 'O' && grid[1][2] === 'O' && grid[2][2] === 'O') return 'O';


  // Check diagonals
  //if (grid[0][0] === 'O' && grid[1][1] === 'O' && grid[2][2] === 'O') return 'O';

  //if (grid[0][2] === 'O' && grid[1][1] === 'O' && grid[2][0] === 'O') return 'O';


  // Check for ties
//   if (grid[0][0] !== ' ' && grid[0][1] !== ' ' && grid[0][2] !== ' ' &&
//       grid[1][0] !== ' ' && grid[1][1] !== ' ' && grid[1][2] !== ' ' &&
//       grid[2][0] !== ' ' && grid[2][1] !== ' ' && grid[2][2] !== ' ') return 'T';

//   return false;

}




// TESTS
// DO NOT MODIFY BELOW THIS LINE

let grid;

grid = [[' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be false`);


grid = [['X','X','X'],
        [' ',' ',' '],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ',' ',' '],
        ['O','O','O'],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [[' ',' ',' '],
        [' ',' ',' '],
        ['X','X','X']]

console.log(`${checkWin(grid)} should be X`);



grid = [['X',' ',' '],
        ['X',' ',' '],
        ['X',' ',' ']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ','O',' '],
        [' ','O',' '],
        [' ','O',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [[' ',' ','X'],
        [' ',' ','X'],
        [' ',' ','X']]

console.log(`${checkWin(grid)} should be X`);


grid = [['X',' ',' '],
        [' ','X',' '],
        [' ',' ','X']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ',' ','O'],
        [' ','O',' '],
        ['O',' ',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [['X','O','X'],
        ['X','O','O'],
        ['O','X','O']]

console.log(`${checkWin(grid)} should be T`);

grid = [['X','X',' '],
        ['X','O','O'],
        ['O','X','O']]

console.log(`${checkWin(grid)} should be false`);







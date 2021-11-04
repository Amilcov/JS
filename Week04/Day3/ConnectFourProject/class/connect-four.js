const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands

    //Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);
    Screen.addCommand('u', 'go up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('d', 'go down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('r', 'go right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('l', 'go left', this.cursor.left.bind(this.cursor));

    Screen.addCommand('m', 'mark position', this.move.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
    Screen.printCommands();
  }


  move() {
   
    if (Screen.grid[this.cursor.row][this.cursor.col] != ' ') {
      console.log('This position is already played. Play on a empty postion');
      return
    }

    Screen.printCommands();
    Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);
    Screen.render();

   let winner = ConnectFour.checkWin(Screen.grid);
   if(winner != false) {
      ConnectFour.endGame(winner);
   }

    if (this.playerTurn === 'O') {
        this.playerTurn = 'X';
    } else {
        this.playerTurn = 'O';
    }

  }

  // Remove this
  // static testCommand() {
  //   console.log("TEST COMMAND");
  // }

  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    //check horizontal win
    for (let i = 0; i < grid.length; i++) {
        let lineArry = grid[i];
        let lineStr = lineArry.join('');

        if (lineStr.includes('XXXX') ) {
           return 'X';
        }

        if (lineStr.includes('OOOO') ) {
           return 'O';
        }

    }

    //check verical win
    for (let col = 0; col < grid[0].length; col++) {
        let colStr = '';
        for (let row = 0; row < grid.length; row++) {
             colStr += grid[row][col];
        }

        if (colStr.includes('XXXX') ) {
           return 'X';
        }

        if (colStr.includes('OOOO') ) {
           return 'O';
        } 

    }

    //1. generate 1st diagonalArray aka: [(0, 0), (1, 1), (2,2)...] 
    let allDiagonal= [];
    let validDiagonal = [];

    let firstDiagonalArray = [];
    for (let i = 0; i < Math.min(grid.length, grid[0].length); i++) {
        firstDiagonalArray.push([i, i]);
    }
    allDiagonal.push(firstDiagonalArray);

    //1-down translate 1st diagonalArray down (== increment row) aka: [(0, 0), (1, 1), (2,2)...] => [(1, 0), [2, 1], [3, 2]... ]
    for(let i = 0; i < grid.length; i++) {
        let firstDiagonalArrayDown = firstDiagonalArray.map (elem => [elem[0] + i, elem[1] ] );
        validDiagonal = firstDiagonalArrayDown.filter( elem => elem[0] < grid.length && elem[1] < grid[0].length);
        allDiagonal.push(validDiagonal);
    } 
    
    //1-up translate 1st diagonalArray up (== increment col) aka: [(0, 0), (1, 1), (2,2)...] => [(0, 1), [1, 2], [2, 3]... ]
    for(let j = 0; j < grid[0].length; j++) {
        let firstDiagonalArrayUp = firstDiagonalArray.map (elem => [elem[0], elem[1] + j]);
        validDiagonal = firstDiagonalArrayUp.filter( elem => elem[0] < grid.length && elem[1] < grid[0].length);
        allDiagonal.push(validDiagonal);
    }



    //2. generate 2nd diagonalArray aka: [(0, 7), (1, 6), (2, 5)...] 
    let secondDiagonalArray = [];
    for (let i = 0; i < grid.length; i++) {
        let j =  grid[0].length - 1 - i;
        secondDiagonalArray.push([i, j]);
    }
    allDiagonal.push(secondDiagonalArray);
    //allDiagonal.push([[0,6], [1,5], [2, 4], [3,3], [4,2], [5, 1]]);

    // 2-down translate 2st diagonalArray down (== increment row) aka: [(0, 7), (1, 6), (2, 5)...] => [(1, 7), [2, 6], [3, 5]... ]
    for(let i = 0; i < grid.length; i++) {
       let secondDiagonalArrayDown = secondDiagonalArray.map (elem => [elem[0] + i, elem[1]]);
       validDiagonal = secondDiagonalArrayDown.filter( elem => elem[0] < grid.length && elem[1] < grid[0].length);
       allDiagonal.push(validDiagonal);
    } 
    
    //2- up translate 2st diagonalArray up (== increment col) aka: [(0, 0), (1, 1), (2,2)...] => [(0, 1), [1, 2], [2, 3]... ]
    for(let j = 0; j < grid[0].length; j++) {
        let secondDiagonalArrayUp = secondDiagonalArray.map (elem => [elem[0], elem[1] - j]);
        validDiagonal = secondDiagonalArrayUp.filter(elem => elem[0] < grid.length && elem[1] < grid[0].length);
        allDiagonal.push(validDiagonal);
    }

   let allDiagonalValue = [];
   for (let i = 0; i < allDiagonal.length; i++) {
        let values = allDiagonal[i].map(elem => { 
                                   let i = elem[0];
                                   let j = elem[1]
                                   return grid[i][j];                    
       });
   allDiagonalValue.push(values.join(''));  
   }

   if (allDiagonalValue.filter(elem => elem.includes('XXXX')).length > 0) {
     return 'X';
   }

   if (allDiagonalValue.filter(elem => elem.includes('OOOO')).length > 0) {
     return 'O';
   }

  

    //check tie
    let isTie = true;
    for (let i = 0; i < grid.length; i++) {
         let lineArry = grid[i];
         if (lineArry.includes(' ') ) {
             isTie = false;
         }
    }
    if (isTie) {
      return 'T';
    }

    return false
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = ConnectFour;

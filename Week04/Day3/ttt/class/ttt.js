const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);
    this.cursor.setBackgroundColor();
    Screen.render();
    
    

    // Replace this with real commands
    //Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.addCommand('u', 'go up', this.cursor.up.bind(this.cursor));    
    Screen.addCommand('d', 'go down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('l', 'go left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('r', 'go right', this.cursor.right.bind(this.cursor));

    Screen.addCommand('m', 'mark position', this.mark.bind(this));

    Screen.printCommands();
  }

  
 mark() {

   console.log(this)
   if (this.grid[this.cursor.row][this.cursor.col] != ' ') {
       console.log('This position it s already played. Choose other position');
       return;
   }

    Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);
    this.grid[this.cursor.row][this.cursor.col] = this.playerTurn;
    Screen.render();

    if (TTT.checkWin(this.grid) !== false) {
       TTT.endGame(this.playerTurn); 
    } 
    
    if (this.playerTurn === 'O') {
        this.playerTurn = 'X';
    } else {
        this.playerTurn = 'O';
    }
    
    Screen.printCommands();
             
  }
  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
     for (let i = 0; i < grid.length; i++) {
         let arry = grid[i];

        //step 1: check horizontal
        if (arry.filter(e => e === 'X').length === grid.length) {
           return 'X';
        }

        if (arry.filter(e => e === 'O').length === grid.length) {
           return 'O';
        }
      } 

      // step 2: check vertical
      for (let i = 0; i < grid.length; i++) {
           if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] && grid[0][i] === 'X') {
             return 'X';
           }

           if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i] && grid[0][i] === 'O') {
             return 'O';
           }

         
      }

      // // step 3: check 1st diagonal
      if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] === 'X') {
           return 'X';
      } 

      if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] === 'O') {
           return 'O';
      } 
      
   
      // step 3: check 2nd diagonal
       if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[0][2] === 'X') {
           return 'X';
      } 

      if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0] && grid[0][2] === 'O') {
           return 'O';
      } 

    // check ties
    let isTie = true
      for (let i = 0; i < grid.length; i++) {
         for (let j = 0; j < grid.length; j++) {
              if (grid[i][j] === ' ') {
                 isTie = false;
              }
         }
      }   
      if (isTie) {
        return 'T'
      }

     

    return false;

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

module.exports = TTT;

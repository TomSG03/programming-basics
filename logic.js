let players = ['x', 'o'];
let activePlayer = 0;
let boardSize = 4;
let board = [];

function changePlayer(player) {
  if (player === 0) { 
    return 1;
  } 
  else {
    return 0;
  }
}

function clearBoard() {
   for (let row = 0; row < boardSize; row++) {
    let arr = [];
    for (let col = 0; col < boardSize; col++) {
      arr.push('');
    }
    board[row] = arr;
  }
}

function getCount(str, symbol) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === symbol) {
      result++;
    }
  }
  return result;
}

function checkLine(line) {
  let result = false;
  if (line.length < boardSize) {
    result = false;
  } 
  else {
    if (getCount(line, players[0]) === boardSize) {
      result = true;
    } 
    else {
      if (getCount(line, players[1]) === boardSize) {
        result = true;
      } 
    }  
  }
  return result;
}

function checkRow() {
  for (let i = 0; i < boardSize; i++) {
    if (checkLine(board[i]) === true) {
      return true;    
    }      
  }
  return false;
}

function checkCol() {
  for (let i = 0; i < boardSize; i++) {
    let arr = [];
    for (let j = 0; j < boardSize; j++) {
      arr.push(board[j][i]);
    }
    if (checkLine(arr) === true) {
      return true;    
    }      
  }
  return false;
}

function checkDiagonal() {
  if (checkDiagonalLeftToRight() === true || checkDiagonalRightToLeft() === true) {
    return true; 
  }
  return false;
}  

function checkDiagonalLeftToRight() {
  let arr = [];
  for (let i = 0; i < boardSize; i++) {
    arr.push(board[i][i]);
  }
  if (checkLine(arr) === true) {
    return true;           
  }
  return false;  
}

function checkDiagonalRightToLeft() {
  arr = [];  
  for (let i = 0; i < boardSize; i++) {
    arr.push(board[i][boardSize - i - 1]);
  }
  if (checkLine(arr) === true) {
    return true;           
  }
  return false;
}
 
function checkWin() {
  if (checkRow() === true || checkCol() === true || checkDiagonal() === true) {
    return true;  
  } 
  return false;
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);
  if (checkWin() === true) {
    showWinner(activePlayer);
  } 
  else {
    activePlayer = changePlayer(activePlayer);
  }
}

function startGame() {
  console.log('Первым ходит игрок №' + (activePlayer + 1) + ' - он играет - ' + players[activePlayer]);
  clearBoard();
  renderBoard(board);
}
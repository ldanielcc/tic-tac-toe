// Simple Tic-Tac-Toe Game using HTML, CSS, and JavaScript

// HTML Structure:
// Create a basic HTML page with a 3x3 grid for the game board. Each cell can be represented by a button or a div element.

// JavaScript Code:
// Game variables
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

// Winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Function to handle a cell click
function handleCellClick(clickedCellIndex) {
  if (board[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  // Update the board with the current player's symbol
  board[clickedCellIndex] = currentPlayer;
  document.getElementById(`cell-${clickedCellIndex}`).innerText = currentPlayer;

  // Check if the player has won or if it is a draw
  checkResult();

  // Switch players
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Function to check if there is a winner or if the game is a draw
function checkResult() {
  let roundWon = false;
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    gameActive = false;
    document.getElementById("status").innerText = `Player ${currentPlayer} has won!`;
    return;
  }

  if (!board.includes("")) {
    gameActive = false;
    document.getElementById("status").innerText = "It's a draw!";
  }
}

// Function to restart the game
function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("status").innerText = "";
  for (let i = 0; i < board.length; i++) {
    document.getElementById(`cell-${i}`).innerText = "";
  }
}

// Add event listeners to cells
window.onload = function() {
  for (let i = 0; i < board.length; i++) {
    document.getElementById(`cell-${i}`).addEventListener("click", () => handleCellClick(i));
  }
  document.getElementById("restartButton").addEventListener("click", restartGame);
};

// HTML:
// <div id="gameBoard">
//   <div id="cell-0" class="cell"></div>
//   <div id="cell-1" class="cell"></div>
//   <div id="cell-2" class="cell"></div>
//   <div id="cell-3" class="cell"></div>
//   <div id="cell-4" class="cell"></div>
//   <div id="cell-5" class="cell"></div>
//   <div id="cell-6" class="cell"></div>
//   <div id="cell-7" class="cell"></div>
//   <div id="cell-8" class="cell"></div>
// </div>
// <button id="restartButton">Restart</button>
// <div id="status"></div>

"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
// let board = [
//   [PLAYER, EMPTY, HOLE],
//   [EMPTY, HOLE, EMPTY],
//   [EMPTY, HAT, EMPTY],
// ];

const Sboard = board.map((row) => row.join("")).join("\n");

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
// function printBoard(Sboard) {
//   console.clear(); // call console.clear() before print each move
//   console.log(Sboard);
// }

// printBoard(Sboard);
// const input = prompt("Which way? (w/a/s/d): ");
// console.log(input);

//control
let row = 0;
let col = 0;
moves.push(board[row][col]);

function playerMovem(input) {
  let newRow = row;
  let newCol = col;
}

switch (input.toLowerCase()) {
  case "w":
    newRow--;
    break;
  case "s":
    newRow++;
    break;
  case "a":
    newCol--;
    break;
  case "d":
    newCol++;
    break;
  default:
    console.log("ONLY W A S D ");
    return;
}

printField();

while (true) {
  const input = prompt("ONLY W A S D");
  playerMovem(input);
}

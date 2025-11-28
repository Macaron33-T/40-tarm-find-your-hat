"use strict";
import promptSync from "prompt-sync";
import { EmitFlags } from "typescript";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

//size

const Rs = 6;
const Cs = 6;

//board building

function printBoard(board) {
  console.clear();
  const myboard = board.map((row) => [...row]);
  myboard[playerRow][playerCol] = PLAYER;
  const drawingboard = myboard.map((row) => row.join("")).join("\n");
  console.log(drawingboard);
}

// Hardcoded board
// let board = [
//   [PLAYER, EMPTY, HOLE],
//   [EMPTY, HOLE, EMPTY],
//   [EMPTY, HAT, EMPTY],
// ];

// const Sboard = board.map((row) => row.join("")).join("\n");

//Game state
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

//random thing

//control
let row = 0;
let col = 0;
moves.push(board[row][col]);

function playerMovem(input) {
  let newRow = row;
  let newCol = col;
}

if (newRow < 0 || newRow >= Rs || newCol < 0 || newCol >= Cs) {
  console.log("Out of box!");
  process.exit();
}

const nextTile = board[newRow][newCol];

if (nextTile === HOLE) {
  console.log(" You fell into a hole!");
  process.exit();
}

if (nextTile === HAT) {
  console.log("🎉 You found the hat! YOU WIN!");
  process.exit();
}

function moveRight() {
  if (playerCol < cols - 1) {
    playerCol++;
    move.push(board[playerRow][playerCol]);
  } else {
    console.log("Invalid move");
  }
}

function moveLeft() {
  if (playerCol > 0) {
    playerCol--;
    move.push(board[playerRow][playerCol]);
  } else {
    console.log("Invaid move");
  }
}

function moveUp() {
  if (playerRow > 0) {
    playerRow--;
    move.push(board[playerRow][playerCol]);
  } else {
    console.log("Invaid move");
  }
}

function moveDown() {
  if (playerRow < rows - 1) {
    playerRow++;
    move.push(board[playerRow][playerCol]);
  } else {
    console.log("Invaid move");
  }
}

switch (input.toLowerCase()) {
  case "w":
    moveUp;
    break;
  case "s":
    moveDown;
    break;
  case "a":
    moveLeft;
    break;
  case "d":
    moveRight;
    break;
  default:
    console.log("ONLY wasd ");
    return;
}

printField();

while (true) {
  const input = prompt("ONLY W A S D");
  playerMovem(input);
}

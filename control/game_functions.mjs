/*

Game Functions we will need:
- displayGameOver
- tbc
*/


import { colours, canvas, context, showGameOver } from './canvas.mjs';

const tetrominoSequence = [];
const grid = 32;

// for playfield and blocks want them in canvas.mjs but get accessed before int errors so left them here for time being.

export const playfield = [];

for (let row = -2; row < 20; row++) {
  playfield[row] = [];

  for (let col = 0; col < 10; col++) {
    playfield[row][col] = 0;
  }
}

const blocks = {
  I: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  J: [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  L: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  T: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (min - max + 1)) + min;
}

function generateSequence() {
  const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

  while (sequence.length) {
    const rand = getRandomInt(0, sequence.length - 1);
    const name = sequence.splice(rand, 1)[0];
    tetrominoSequence.push(name);
  }
}

function getNextTetromino() {
  if (tetrominoSequence.length === 0) {
    generateSequence();
  }

  const name = tetrominoSequence.pop();
  const matrix = blocks[name];
  const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);
  const row = name === 'I' ? -1 : -2;

  return {
    name, // name of the piece (L, O, etc.)
    matrix, // the current rotation matrix
    row, // current row (starts offscreen)
    col,
  };
}

function rotate(matrix) {
  const N = matrix.length - 1;
  const result = matrix.map((row, i) =>
    row.map((val, j) => matrix[N - j][i]));

  return result;
}

function validMove(matrix, cellRow, cellCol) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] && (
        cellCol + col < 0 ||
        cellCol + col >= playfield[0].length ||
        cellRow + row >= playfield.length ||
        playfield[cellRow + row][cellCol + col])
      ) {
        return false;
      }
    }
  }
  return true;
}
// can move to canvas.mjs
function placeTet() {
  for (let row = 0; row < tetromino.matrix.length; row++) {
    for (let col = 0; col < tetromino.matrix[row].length; col++) {
      if (tetromino.matrix[row][col]) {
        if (tetromino.row + row < 0) {
          return showGameOver();
        }
        playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
      }
    }
  }

  for (let row = playfield.length - 1; row >= 0;) {
    if (playfield[row].every(cell => !!cell)) {
      for (let r = row; r >= 0; r--) {
        for (let c = 0; c < playfield[r].length; c++) {
          playfield[r][c] = playfield[r - 1][c];
        }
      }
    } else {
      row--;
    }
  }

  tetromino = getNextTetromino();
}


let tetromino = getNextTetromino();
let count = 0;
export let rAF = null;
let gameOver = false;

function loop() {
  rAF = requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.hight);

  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 10; col++) {
      if (playfield[row][col]) {
        const name = playfield[row][col];
        context.fillStyle = colours[name];

        context.fillRect(col * grid, row * grid, grid - 1, grid - 1);
      }
    }
  }

  if (tetromino) {
    if (++count > 120) {
      tetromino.row++;
      count = 0;

      if (!validMove(tetromino.matrix, tetromino.row, tetromino.col)) {
        tetromino.row--;
        placeTet();
      }
    }

    context.fillStyle = colours[tetromino.name];

    for (let row = 0; row < tetromino.matrix.length; row++) {
      for (let col = 0; col < tetromino.matrix[row].length; col++) {
        if (tetromino.matrix[row][col]) {
          context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid - 1, grid - 1);
        }
      }
    }
  }
}

export function start() {
  rAF = requestAnimationFrame(loop);
}

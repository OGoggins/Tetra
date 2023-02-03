/*

Game Functions we will need:
- displayGameOver
- tbc
*/


import { colours, canvas, context, showGameOver, playfield, blocks, playHight, playWidth } from './canvas.mjs';


const tetrominoSequence = [];
export const grid = 25;
let fps, fpsInterval, startTime, now, then, elapsed;
// for playfield and blocks want them in canvas.mjs but get accessed before int errors so left them here for time being.
let timer = 30;


function startAnimate(fps) {

}


function fpsMeter() {
  let prevTime = Date.now(),
      frames = 0;

  requestAnimationFrame(function loopfps() {
    const time = Date.now();
    frames++;
    if (time > prevTime + 1000) {
      let fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
      prevTime = time;
      frames = 0;

      console.info('FPS: ', fps);
      timer = fps + 30;
    }
    
    console.log(timer);
    requestAnimationFrame(loopfps);
  });
}




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

export function rotate(matrix) {
  const N = matrix.length - 1;
  const result = matrix.map((row, i) =>
    row.map((val, j) => matrix[N - j][i]));

  return result;
}

export function validMove(matrix, cellRow, cellCol) {
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
export function placeTet() {
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
      lineClearCounter++;
      for (let r = row; r >= 0; r--) {
        for (let c = 0; c < playfield[r].length; c++) {
          playfield[r][c] = playfield[r - 1][c];
        }
      }
    } else {
      row--;
    }
  }
  switch (lineClearCounter) {
    case 1:
      updateScore(100);
      break;
    case 2:
      updateScore(300);
      break;
    case 3:
      updateScore(500);
      break;
    case 4:
      updateScore(800);
      break;
    default:
      break;
  }
  tetromino = getNextTetromino();
}


let count = 0;

export let tetromino = null;

export let rAF = null; // keep track of the animation frame so we can cancel it


function loop() {
  rAF = requestAnimationFrame(loop);
  context.clearRect(0, 0, canvas.width, canvas.height);
  lineClearCounter = 0;
  
  // draw the playfield
  for (let row = 0; row < playHight; row++) {
    for (let col = 0; col < playWidth; col++) {
      if (playfield[row][col]) {
        const name = playfield[row][col];
        context.fillStyle = colours[name];
        
        // drawing 1 px smaller than the grid creates a grid effect
        context.fillRect(col * grid, row * grid, grid - 1, grid - 1);
      }
    }
  }
  
  // draw the active tetromino
  if (tetromino) {
    // tetromino falls every 30 frames
    
    if (++count > timer) {
      fpsMeter();
      tetromino.row++;
      count = 0;

      // place piece if it runs into anything
      if (!validMove(tetromino.matrix, tetromino.row, tetromino.col)) {
        tetromino.row--;
        placeTet();
        updateScore(1);
      }
    }

    context.fillStyle = colours[tetromino.name];

    for (let row = 0; row < tetromino.matrix.length; row++) {
      for (let col = 0; col < tetromino.matrix[row].length; col++) {
        if (tetromino.matrix[row][col]) {
          // drawing 1 px smaller than the grid creates a grid effect
          context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid - 1, grid - 1);
        }
      }
    }
  }
}


// how it starts can be put in a function to control if you want to start or restart

export function start() {
  tetromino = getNextTetromino();
  rAF = requestAnimationFrame(loop);
}

let lineClearCounter = 0;
let score = 0;
export function updateScore(points) {
  score = score + points;
  const scoreLocation = document.querySelector('#score');
  scoreLocation.textContent = `Score: ${score}`;
}

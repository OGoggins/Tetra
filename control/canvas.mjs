
import { rAF } from './game_functions.mjs';

export const canvas = document.querySelector('#gameScreen');
export const context = canvas.getContext('2d');
export const playfield = [];

export const playHight = 20;
export const playWidth = 12;


for (let row = -2; row < playHight; row++) {
  playfield[row] = [];

  for (let col = 0; col < playWidth; col++) {
    playfield[row][col] = 0;
  }
}
console.log(playfield);

export const blocks = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
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
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
};

export const colours = {
  I: 'cyan',
  O: 'yellow',
  T: 'purple',
  S: 'green',
  Z: 'red',
  J: 'blue',
  L: 'orange',
};


export function resizeCanvas() {
  const newHeight = window.innerHeight;
  const newWidth = document.body.clientWidth;

  canvas.height = newHeight / 1.05;
  canvas.width = newWidth / 1.02;
}


export let gameOver = false;


export function showGameOver() {
  cancelAnimationFrame(rAF);
  gameOver = true;
}

/*
Canvas Functions we'll prolly need:
- drawBlock
- moveBlock
- placeBlock (this function isnt just pure canvas drawing as will need to update the grid)
- rotateBlock (no fucking clue, should leave til the end)
*/

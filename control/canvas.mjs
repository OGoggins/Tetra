import { rAF } from './game_functions.mjs';

export const canvas = document.querySelector('#gameScreen');
export const context = canvas.getContext('2d');



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



let gameOver = false;


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
'use strict';

import { resizeCanvas, drawGrid, canvas, context } from './canvas.mjs';
import { start } from './game_functions.mjs';


function init() {
  registerSW();
  resizeCanvas();
  prepareEventListeners();
  context.clearRect(0, 0, canvas.width, canvas.height);

  main();
}

function prepareEventListeners() {
  window.addEventListener('resize', resizeCanvas);

  // KB Listeners Here
}

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js', {
        scope: './',
      });
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
}

function main() {
  window.requestAnimationFrame(main);
  drawGrid();
  start();
}


window.addEventListener('load', init);

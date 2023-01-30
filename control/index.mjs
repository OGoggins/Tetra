'use strict';

import { start } from './game_functions.mjs';
import { resizeCanvas, canvas, context } from './canvas.mjs';
import { controler } from './controls.mjs';


function init() {
  registerSW();
  resizeCanvas();
  prepareEventListeners();
  context.clearRect(0, 0, canvas.width, canvas.height);

  main();
  start();
}

function prepareEventListeners() {
  window.addEventListener('resize', resizeCanvas);

  document.addEventListener('keydown', controler);
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
<<<<<<< Updated upstream
  document.addEventListener('keydown', controler)

=======
>>>>>>> Stashed changes
}


window.addEventListener('load', init);

'use strict';

import { canvas, context } from './canvas.mjs';
import { controler } from './controls.mjs';
import { start } from './game_functions.mjs';


function init() {
  registerSW();
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
}
window.addEventListener('load', init);

'use strict';

import { resizeCanvas, canvas, context } from './canvas.mjs';
import { controler } from './controls.mjs';


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
  document.addEventListener('keydown', controler)

}


window.addEventListener('load', init);

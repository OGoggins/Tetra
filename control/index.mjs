'use strict';

import { resizeCanvas } from './canvas.mjs';

function init() {
  registerSW();
  resizeCanvas();
  main();
}

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
}

function main() {

}


window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', init);

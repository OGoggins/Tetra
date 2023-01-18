'use strict';

import { resizeCanvas, drawGrid } from './canvas.mjs';

function init() {
  registerSW();
  resizeCanvas();
  prepareEventListeners();
  const canvas = document.querySelector('#gameScreen');
  const c = canvas.getContext('2d');
  c.clearRect(0, 0, canvas.width, canvas.height);

  main();
}

function prepareEventListeners() {
  window.addEventListener('resize', resizeCanvas);

  // KB Listeners Here
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
  window.requestAnimationFrame(main);
  drawGrid(grid);
}

const grid = [];
window.addEventListener('load', init);

'use strict';

import { canvas, context } from './canvas.mjs';
import { controler, handleTouch } from './controls.mjs';
import { start } from './game_functions.mjs';


function init() {
  registerSW();
  prepareEventListeners();
  context.clearRect(0, 0, canvas.width, canvas.height);

  main();
  start();
}

function prepareEventListeners() {
  document.addEventListener('keydown', controler);
  document.addEventListener('touchstart', function (event) {
    touchstartX = event.screenX;
    touchstartY = event.screenY;
  });

  document.addEventListener('touchend', function (event) {
    touchendX = event.screenX;
    touchendY = event.screenY;
    handleTouch(touchstartX, touchstartY, touchendX, touchendY);
  });
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

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

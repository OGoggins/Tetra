'use strict';

import { resizeCanvas } from './canvas.mjs';

function init() {
  resizeCanvas();
  main();
}

function main() {

}


window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', init);

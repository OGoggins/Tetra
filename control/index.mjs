'use strict';

import { dinamic } from "./canvas.mjs";

function init() {
    main();
}

function main() {
    dinamic();
}


window.addEventListener("resize", dinamic);
window.addEventListener('load', init);


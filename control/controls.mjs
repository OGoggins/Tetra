import { gameOver } from "./canvas.mjs";
import { rotate, tetromino, validMove, placeTet } from "./game_functions.mjs";


export function controler(e) {
   if (gameOver) return;
 
   const k = e.key.toLocaleLowerCase();
 
   // left and right arrow keys (move)
   if (k === 'arrowleft' || k === 'arrowright') {
     const col = k === 'arrowleft'
       ? tetromino.col - 1
       : tetromino.col + 1;
 
     if (validMove(tetromino.matrix, tetromino.row, col)) {
       tetromino.col = col;
     }
   }

   // up arrow key (rotate)
   if (k === 'arrowup') {
     const matrix = rotate(tetromino.matrix);
     if (validMove(matrix, tetromino.row, tetromino.col)) {
       tetromino.matrix = matrix;
     }
   }
 
   // down arrow key (drop)
   if(k === 'arrowdown') {
     const row = tetromino.row + 1;
 
     if (!validMove(tetromino.matrix, row, tetromino.col)) {
       tetromino.row = row - 1;
 
       placeTet();
       return;
     }
 
     tetromino.row = row;
   }
 };
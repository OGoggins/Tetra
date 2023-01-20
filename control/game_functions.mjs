/*

Game Functions we will need:
- displayGameOver
- tbc
*/

export function generateSequence(queue) {
  queue.push(sequence[Math.floor(Math.random() * 7)]);
  queue.push(sequence[Math.floor(Math.random() * 7)]);
}

export function updateSequence(queue) {
  queue.shift();
  queue.push(sequence[Math.floor(Math.random() * 7)]);
}

export function initBlock(block, grid) {
}

const sequence = ['I', 'J', 'L', 'O', 'S', 'Z', 'T'];

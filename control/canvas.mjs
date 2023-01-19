export function resizeCanvas() {
  const newHeight = window.innerHeight;
  const newWidth = document.body.clientWidth;
  const canvas = document.querySelector('#gameScreen');

  canvas.height = newHeight / 1.05;
  canvas.width = newWidth / 1.02;
}

export function drawGrid() {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      // Code that draws here
    }
  }
}

const grid = [];

const blocks = {
  I: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ],
  J: [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  L: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  T: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
};

/*
Canvas Functions we'll prolly need:
- drawBlock
- moveBlock
- placeBlock (this function isnt just pure canvas drawing as will need to update the grid)
- rotateBlock (no fucking clue, should leave til the end)
*/

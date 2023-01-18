export function resizeCanvas() {
  const newHeight = window.innerHeight;
  const newWidth = document.body.clientWidth;
  const canvas = document.querySelector('#gameScreen');

  canvas.height = newHeight / 1.05;
  canvas.width = newWidth / 1.02;
}

export function drawGrid(grid) {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      // Code that draws here
    }
  }
}

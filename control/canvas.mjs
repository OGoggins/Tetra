export function resizeCanvas() {
  const newHeight = window.innerHeight;
  const newWidth = document.body.clientWidth;
  const canvas = document.querySelector('#gameScreen');

  canvas.height = newHeight / 1.05;
  canvas.width = newWidth / 1.02;
}

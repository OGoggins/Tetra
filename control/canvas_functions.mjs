export function resizeCanvas() {
  if (window.innerHeight < 1000 || (window.innerHeight < 1000 && window.innerWidth < 500)) {
    const newHeight = Math.floor((window.innerHeight - 200) / 2);

    canvas.height = newHeight * 2;
    canvas.width = canvas.height / 2;
  } else if (window.innerWidth < 500) {
    const newWidth = window.innerWidth - 100;

    canvas.width = newWidth;
    canvas.height = canvas.width * 2;
  } else {
    canvas.width = 400;
    canvas.height = 800;
  }
}

export function drawGrid(array) {
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array[0].length; y++) {
      drawRect(array[x][y], x, y);
    }
  }
}

function drawRect(item, arrayX, arrayY) {
  const rectLength = canvas.width * 0.1;
  c.beginPath();
  switch (item) {
    case 0:
      c.strokeRect(arrayY * rectLength, arrayX * rectLength, rectLength, rectLength);
      break;
    case 1:
      c.fillStyle = 'orange';
      c.fillRect((arrayY * rectLength) + 1, (arrayX * rectLength) + 1, rectLength - 2, rectLength - 2);
      break;
    case 2:
      c.fillStyle = 'cyan';
      c.fillRect((arrayY * rectLength) + 1, (arrayX * rectLength) + 1, rectLength - 2, rectLength - 2);
      break;
    case 3:
      c.fillStyle = 'red';
      c.fillRect((arrayY * rectLength) + 1, (arrayX * rectLength) + 1, rectLength - 2, rectLength - 2);
      break;
    case 4:
      c.fillStyle = 'green';
      c.fillRect((arrayY * rectLength) + 1, (arrayX * rectLength) + 1, rectLength - 2, rectLength - 2);
      break;
    case 5:
      c.fillStyle = 'navy';
      c.fillRect((arrayY * rectLength) + 1, (arrayX * rectLength) + 1, rectLength - 2, rectLength - 2);
      break;
    case 6:
      c.fillStyle = 'yellow';
      c.fillRect((arrayY * rectLength) + 1, (arrayX * rectLength) + 1, rectLength - 2, rectLength - 2);
      break;
    case 7:
      c.fillStyle = 'purple';
      c.fillRect((arrayY * rectLength) + 1, (arrayX * rectLength) + 1, rectLength - 2, rectLength - 2);
      break;
    default:
      break;
  }
}

const canvas = document.querySelector('#gameScreen');
const c = canvas.getContext('2d');

/*
Canvas Functions we'll prolly need:
- drawBlock
- moveBlock
- placeBlock (this function isnt just pure canvas drawing as will need to update the grid)
- rotateBlock (no fucking clue, should leave til the end)
*/

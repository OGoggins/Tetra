

export function dinamic() {
    const clientHight = document.body.clientHeight;
    const clientWidth = document.body.clientWidth;
    const canvas = document.querySelector('#gameScreen');
    
    canvas.hight = clientHight;
    canvas.width = clientWidth / 1.02;
}
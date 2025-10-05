let mousePos = { x: undefined, y: undefined };
window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
});
let out=false;
let w=0;
window.addEventListener('click',()=>{
    out=true;
})
function setup() {
    createCanvas(1525, 708);
}
function draw() {
    background(34);
    fill(255, 0, 0, 235-w);
    stroke(255, 0, 0, 255-w);
    strokeWeight(7);
    if (out && w<255){
        circle(mousePos.x, mousePos.y, w);
        w+=3;
    }
    else{
        w=0;
        out=false;
    }
}
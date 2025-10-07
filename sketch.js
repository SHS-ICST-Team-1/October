let g_laptop=[20,20,
    20,40,
    40,40,
    40,20];
let g_color=[140,140,140];



let rect1= (x,y,w,h)=>{
    console.log("" + x + +y +',' +x +(y+h) +',' + (x+w) + (y+h) +',' + (x+w) +y );
    rect(x,y,w,h);
}
function setup() {
    createCanvas(1525, 708);
}
function draw() {
    background(34);
    polygon(g_laptop,g_color);
}
const polygon= (arr,rgb) =>{
    fill(rgb[0],rgb[1],rgb[2]);
    beginShape();
    for (let i=0;i<arr.length;i+=2){
        vertex(arr[i],arr[i+1]);
    }
    endShape(CLOSE);
}
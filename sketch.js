let g_laptop=[];
let g_color=[50,50,50];
let height=500
let num=31;

let rect1 = (x, y, w, h, color) => {
    console.log("" + x + "," + y + ',' + x + "," + (y + h) + ',' + (x + w) + "," + (y + h) + ',' + (x + w) + "," + y);
    fill("rgb(" + color + ")");
    rect(x, y, w, h);
}
function setup() {
    createCanvas(1525, 708);
}
function draw() {
    background(34);
    textSize(50);
    fill(255, 255, 255);
    text("SHS Team #1\n      Setups", 625, height);
    if (height>150&&frameCount%2==0){
        height-=num;
        num/=1.1;
    }
    rect1(580, 300, 360, 200, "50,50,50");
    g_laptop = [580, 500, 940, 500, 1020, 600, 500, 600];

    polygon(g_laptop, g_color);
}
const polygon= (arr,rgb) =>{
    fill(rgb[0],rgb[1],rgb[2]);
    beginShape();
    for (let i=0;i<arr.length;i+=2){
        vertex(arr[i],arr[i+1]);
    }
    endShape(CLOSE);
}
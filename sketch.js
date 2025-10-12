let g_laptopBase=[];
let g_color=[50,50,50];
let height=500
let num=31;
// Position for Siddharth's laptop (adjust these to move it)
let sidLaptopX = 75;
let sidLaptopY = 370; // moved down from 300

let rect1 = (x, y, w, h, color) => {
    console.log("" + x + "," + y + ',' + x + "," + (y + h) + ',' + (x + w) + "," + (y + h) + ',' + (x + w) + "," + y);
    fill("rgb(" + color + ")");
    rect(x, y, w, h);
}
function setup() {
  const cnv = createCanvas(innerWidth -25, innerHeight);
  // Attach the canvas to the container so it appears above the H1
  cnv.parent('p5-container');
}
function draw() {
    background(34);
    fill(255, 255, 255);

    textSize(50);
    textAlign(CENTER, CENTER);
    text("     SHS Team #1\n      Setups", 725, height);
    if (height>150&&frameCount%2==0){
        height-=num;
        num/=1.1;
    }
    // MOVED WINDOWS LAPTOP DOWN 70 PIXELS
    rect1(580, 370, 360, 200, "50,50,50"); // CHANGED: y from 300 to 370
    rect1(590, 385, 340, 170, "20,20,20"); // CHANGED: y from 315 to 385

    let x=720,y=420; // CHANGED: y from 350 to 420
    rect1(x, y, 40, 40, "0,120,212");
    rect1(x+45, y +45, 40, 40, "0,120,212");
    rect1(x, y +45, 40, 40, "0,120,212");
    rect1(x+45, y, 40, 40, "0,120,212");
    g_laptopBase = [580, 570, 940, 570, 1020, 670, 500, 670]; // CHANGED: all y coordinates increased by 70
    polygon([1020, 670, 990,677, 530, 677, 500, 670],[45,45,45]) // CHANGED: all y coordinates increased by 70
    
    polygon(g_laptopBase, g_color);
  // Siddharth laptop (now positioned via variables)
    drawSiddharthLaptop(sidLaptopX, sidLaptopY);
    drawAppleLaptop(80,40);
    drawSilverLaptop(1150, 80);
}


function polygon(arr, rgb) {
  fill(rgb[0], rgb[1], rgb[2]);
  beginShape();
  for (let i = 0; i < arr.length; i += 2) {
    vertex(arr[i], arr[i + 1]);
  }
  endShape(CLOSE);
}

function drawSiddharthLaptop(x, y) {
  // base screen rect
  let macx = x;
  let macy = y;
  let macw = 340;
  let mach = 200;

  fill(70);
  rect(macx, macy, macw, mach); // overall
  fill(20);
  rect(macx + 10, macy + 10, macw - 20, mach - 20, 5); // screen
  fill(100);

  // base start
  beginShape();
  fill(70);
  stroke(0, 0, 0);
  vertex(macx, macy + mach); // tpl
  vertex(macx + macw, macy + mach); // tpr
  vertex(macx + macw + 60, macy + mach + 100); // btr
  vertex(macx - 60, macy + mach + 100); // btl
  endShape(CLOSE); // base end

  // bottom of base
  beginShape();
  fill(70);
  stroke(0, 0, 0);
  vertex(macx - 60, macy + mach + 100); // tpl
  vertex(macx + macw + 60, macy + mach + 100); // tpr
  vertex(macx + macw + 40, macy + mach + 107); // btr
  vertex(macx - 40, macy + mach + 107); // btl
  endShape(CLOSE);

  // apple logo
  let logox = macx + macw / 2;
  let logoy = macy + mach / 2 - 20;

  push(); // begin drawing group
  translate(logox, logoy);
  scale(1);

  fill(255, 255, 255);
  noStroke();

  beginShape();
  // leaf
  vertex(0, -30);
  quadraticVertex(10, -50, 25, -45);
  quadraticVertex(25, -30, 0, -30);
  endShape(CLOSE);

  beginShape();
  vertex(0, -10);
  bezierVertex(20, -25, 50, -10, 60, 0);
  bezierVertex(37, 15, 50, 38, 60, 45); // bite
  bezierVertex(65, 50, 60, 60, 50, 70);
  bezierVertex(30, 90, 20, 60, -5, 70);
  bezierVertex(-30, 90, -50, 60, -52, 40);
  bezierVertex(-60, 0, -30, -30, 0, -10);
  vertex(-10, 50);
  endShape(CLOSE);
  pop();
}

function drawAppleLaptop(x, y) {
  
  rect1(x, y, 360, 200, "255,201,100");
  rect1(x + 10, y + 15, 340, 170, "10,10,10"); 

  
  fill(255);
  noStroke();
  ellipse(x + 180, y + 100, 40, 50);
  fill(10);
  ellipse(x + 193, y + 90, 20, 25); // bite mark
  fill(255);
  ellipse(x + 172, y + 70, 15, 10); // leaf

  let base = [x, y + 200, x + 360, y + 200, x + 440, y + 300, x - 80, y + 300];
  polygon(base, [250, 150, 50]);
}
function drawSilverLaptop(x, y) {
  rect1(x, y, 300, 162, "80,130,170"); 
  rect1(x + 10, y + 10, 280, 144, "0,0,0");

  let baseTop = [x, y + 162, x + 300, y + 162, x + 330, y + 234, x - 30, y + 234];
  polygon(baseTop, [100, 150, 190]);

  let baseBottom = [x - 30, y + 234, x + 330, y + 234, x + 310, y + 242, x - 10, y + 242];
  polygon(baseBottom, [100, 140, 150]);

  fill(255);
  noStroke();
  ellipse(x + 150, y + 81, 60, 60);

  fill(0);
  textSize(24);
  textFont("sans-serif");
  textAlign(CENTER, CENTER);
  text("hp", x + 150, y + 81);

  let keyTopY = y + 172;
  let keyBottomY = y + 200;
  let keyDepth = 6;
  let keyWidthTop = 38;
  let keyWidthBottom = 48;
  let keySpacing = 20;
  let startX = x + 66;
}
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
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("\"Teamwork Makes the Dream Work - Kaushik Karthik\"", width / 2, height - 60);
  textSize(50);
  text("SHS Team #1\nSetups", width / 2, height);

  if (height > 150 && frameCount % 2 == 0) {
    height -= num;
    num /= 1.1;
  }

  // Windows laptop
  rect1(580, 370, 360, 200, "50,50,50");
  rect1(590, 385, 340, 170, "20,20,20");

  let x = 720, y = 420;
  rect1(x, y, 40, 40, "0,120,212");
  rect1(x + 45, y + 45, 40, 40, "0,120,212");
  rect1(x, y + 45, 40, 40, "0,120,212");
  rect1(x + 45, y, 40, 40, "0,120,212");

  g_laptopBase = [580, 570, 940, 570, 1020, 670, 500, 670];
  polygon([1020, 670, 990, 677, 530, 677, 500, 670], [45, 45, 45]);
  polygon(g_laptopBase, g_color);

  drawSiddharthLaptop(sidLaptopX, sidLaptopY);
  drawAppleLaptop(80, 40);
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
  let macx = x;
  let macy = y;
  let macw = 340;
  let mach = 200;

  fill(70);
  rect(macx, macy, macw, mach);
  fill(20);
  rect(macx + 10, macy + 10, macw - 20, mach - 20, 5);

  beginShape();
  fill(70);
  stroke(0);
  vertex(macx, macy + mach);
  vertex(macx + macw, macy + mach);
  vertex(macx + macw + 60, macy + mach + 100);
  vertex(macx - 60, macy + mach + 100);
  endShape(CLOSE);

  beginShape();
  fill(70);
  stroke(0);
  vertex(macx - 60, macy + mach + 100);
  vertex(macx + macw + 60, macy + mach + 100);
  vertex(macx + macw + 40, macy + mach + 107);
  vertex(macx - 40, macy + mach + 107);
  endShape(CLOSE);

  let logox = macx + macw / 2;
  let logoy = macy + mach / 2 - 20;

  push();
  translate(logox, logoy);
  scale(1);
  fill(255);
  noStroke();

  beginShape();
  vertex(0, -30);
  quadraticVertex(10, -50, 25, -45);
  quadraticVertex(25, -30, 0, -30);
  endShape(CLOSE);

  beginShape();
  vertex(0, -10);
  bezierVertex(20, -25, 50, -10, 60, 0);
  bezierVertex(37, 15, 50, 38, 60, 45);
  bezierVertex(65, 50, 60, 60, 50, 70);
  bezierVertex(30, 90, 20, 60, -5, 70);
  bezierVertex(-30, 90, -50, 60, -52, 40);
  bezierVertex(-60, 0, -30, -30, 0, -10);
  vertex(-10, 50);
  endShape(CLOSE);
  pop();
}

function drawAppleLaptop(x, y) {
  rect1(x, y, 360, 200, "180,180,180");
  rect1(x + 10, y + 15, 340, 170, "150,150,150");

  fill(255);
  noStroke();
  ellipse(x + 180, y + 100, 40, 50);
  fill(150);
  ellipse(x + 193, y + 90, 20, 25);
  fill(255);
  ellipse(x + 172, y + 70, 15, 10);

  let base = [x, y + 200, x + 360, y + 200, x + 440, y + 300, x - 80, y + 300];
  polygon(base, [160, 160, 160]);
}

function drawSilverLaptop(x, y) {
  rect1(x, y, 300, 162, "200,200,200"); 
  rect1(x + 10, y + 10, 280, 144, "100,100,100");

  let baseTop = [x, y + 162, x + 300, y + 162, x + 330, y + 234, x - 30, y + 234];
  polygon(baseTop, [180, 180, 180]);

  let baseBottom = [x - 30, y + 234, x + 330, y + 234, x + 310, y + 242, x - 10, y + 242];
  polygon(baseBottom, [150, 150, 150]);

  fill(220);
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
  let labels = ["C++", "Python", "JS"];
  let labelColors = [[135, 206, 250], [255, 215, 0], [255, 165, 0]];

  for (let i = 0; i < 3; i++) {
    let topLeftX = startX + i * (keyWidthBottom + keySpacing);
    let top = [
      topLeftX + 5, keyTopY,
      topLeftX + 5 + keyWidthTop, keyTopY,
      topLeftX + keyWidthBottom, keyBottomY,
      topLeftX, keyBottomY
    ];
    polygon(top, [60, 60, 60]);

    let bottom = [
      topLeftX, keyBottomY,
      topLeftX + keyWidthBottom, keyBottomY,
      topLeftX + keyWidthBottom, keyBottomY + keyDepth,
      topLeftX, keyBottomY + keyDepth
    ];
    polygon(bottom, [40, 40, 40]);

    fill(labelColors[i][0], labelColors[i][1], labelColors[i][2]);
    textSize(14);
    textAlign(CENTER, CENTER);
    text(labels[i], topLeftX + keyWidthBottom / 2, keyBottomY - 10);
  }
}

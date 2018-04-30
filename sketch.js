// declare variables
var sizet = 0.1;
var big1  = 100;
var big2  = 100;
var img;

function setup() {
  // put setup code here
  createCanvas(500, 500);
}

function draw() {
  // put drawing code here
  background("#000000");
  noFill();
  stroke("#DFDBDA");
  strokeWeight(8);
  ellipse(250,250,big1,big2);
  ellipse(330,250,big1,big2);
  ellipse(170,250,big1,big2);
  ellipse(90,250,big1,big2);
  fill("#FB0404");
  stroke("#FB0404");
  strokeWeight(2);
  textSize(sizet);
  textFont("Vietnamese");
  text('A', 100, 350);
  text('u', 170, 350);
  text('d', 240, 350);
  text('i', 310, 350);
  
}

// text appears when mouse is pressed
function mousePressed() {
	if (sizet == 0.1) {
    sizet = 50;
  }else {
    sizet = 50;
  }
}

//text is reset when key 'r' or "R" is pressed 
function keyPressed() {
  if (key === 'r' || key === 'R') {
       sizet = 0.1;
  } else {
       sizet = 50;
  }
}
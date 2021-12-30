var canvas;
var fruitboy

function preload() {
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  fruitboy = createSprite(343,66,10,10)
}

function draw() {
  background("green");
drawSprites()
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

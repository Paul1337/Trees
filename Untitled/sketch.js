function setup() {
  createCanvas(800, 600)
}

function draw() {
  
}

function tank(x, y, w, h, rotationX, rotationY, rotationZ) {
  this.x = x;
  this.y = y; 
  this.w = w;
  this.h = h;
  this.rotationX = rotationX;
  this.rotationY = rotationY;
  this.rotationZ = rotationZ;
  
}
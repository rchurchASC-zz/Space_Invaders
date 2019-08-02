class Projectile {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  move() {
    this.y -= 5;
  }

  draw() {
    fill(51);
    rect(this.x, this.y, this.w, this.h);
  }
}

let playerX = 725;
let projectileArray = [];
function setup() {
  createCanvas(1250, 600);
}
function draw() {
  move();
  keyPressed();
  shippers();
  alienshipper();
  for(let i = 0; i<projectileArray.length; i++){
      projectileArray[i].draw();
      projectileArray[i].move();
  }
    rect(300, alien.y[0], 100, 50);
    rect(700, alien.y[0], 100, 50);
    rect(1000, alien.y[0], 100, 50);
}

function shippers() {
  fill(color(255, 0, 0));
  rect(playerX, 540, 20, 50);
}
function alienshipper() {
  for (let i = 0; i < 3; i++) {
    rect(300, alien.y[0], 100, 50);
    rect(700, alien.y[0], 100, 50);
    rect(1000, alien.y[0], 100, 50);
  }
}
function move() {
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 5;
  }
}
function keyPressed() {
  if (keyIsDown(32)) {
    projectileArray.push(new Projectile(playerX, 540, 10, 10));
  }
}

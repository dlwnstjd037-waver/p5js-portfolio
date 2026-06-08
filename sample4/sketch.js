function setup() {
  createCanvas(600, 400);
}

function draw() {
  let cycle = frameCount % 800; 
  let bgColor;
  let starAlpha;

  if (cycle < 200) {
    let amt = map(cycle, 0, 200, 0, 1);
    bgColor = lerpColor(color(20, 30, 60), color(150, 80, 180), amt);
    starAlpha = map(cycle, 0, 200, 255, 100);
  } else if (cycle < 400) {
    let amt = map(cycle, 200, 400, 0, 1);
    bgColor = lerpColor(color(150, 80, 180), color(100, 200, 255), amt);
    starAlpha = map(cycle, 200, 400, 100, 0);
  } else if (cycle < 600) {
    let amt = map(cycle, 400, 600, 0, 1);
    bgColor = lerpColor(color(100, 200, 255), color(255, 120, 100), amt);
    starAlpha = map(cycle, 400, 600, 0, 100);
  } else {
    let amt = map(cycle, 600, 800, 0, 1);
    bgColor = lerpColor(color(255, 120, 100), color(20, 30, 60), amt);
    starAlpha = map(cycle, 600, 800, 100, 255);
  }
  background(bgColor);

  let slowMoveX = sin(frameCount * 0.01) * 10;
  let slowMoveY = cos(frameCount * 0.01) * 10;
  let pulse = sin(frameCount * 0.02) * 15;

  noStroke();
  fill(120, 80, 200, 80);
  ellipse(150 + slowMoveX, 150 + slowMoveY, 450 + pulse, 450 + pulse);

  fill(100, 255, 220, 60);
  ellipse(450 - slowMoveX, 250 - slowMoveY, 350 + pulse, 350 + pulse);

  fill(40, 40, 50, 180);
  quad(350, 0, 600, 80, 550, 400, 300, 350);

  rectMode(CENTER);
  fill(255, 80, 150, 200);
  rect(300, 200, 140 + pulse / 2, 140 + pulse / 2);

  fill(255, 255, 255, 120);
  arc(300, 200, 200, 200, frameCount * 0.01, radians(270) + frameCount * 0.01);

  fill(255, 230, 100, 220);
  triangle(300, 100 + slowMoveY, 240, 250, 360, 250);

  let lineMove = sin(frameCount * 0.005) * 30;
  stroke(100, 200, 255);
  strokeWeight(0.5);
  line(0, 50 + lineMove, 600, 350 - lineMove);
  line(50, 0, 550, 400);
  
  stroke(180, 160, 255, 150);
  strokeWeight(1);
  line(100, 0, 500, 400);
  line(0, 150 - lineMove, 600, 250 + lineMove);

  noStroke();
  let speed1 = frameCount * 1.5;
  let speed2 = frameCount * 2.5;

  fill(255, 255, 255, starAlpha);
  circle((130 + speed1) % width, (130 + speed1) % height, 15);
  circle((50 + speed2) % width, (50 + speed2) % height, 8);
  circle((350 + speed1) % width, (50 + speed1) % height, 6);
  circle((550 + speed2) % width, (350 + speed2) % height, 10);
  circle((100 + speed1) % width, (300 + speed1) % height, 5);

  let twinkle = (sin(frameCount * 0.1) + 1) * 3 + random(-1, 1);
  fill(100, 255, 220, starAlpha);
  circle(470, 270, 8 + twinkle);
  circle(250, 100, 4 + twinkle);
  circle(400, 180, 3 + twinkle);
}

function keyPressed() {
  if (key === 's' || key === 'S') saveGif('my_abstract_art', 13);
}
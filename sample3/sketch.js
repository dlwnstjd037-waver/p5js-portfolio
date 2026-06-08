let charX = 300;
let charY = 180;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220, 220, 215);

  if (mouseIsPressed) {
    randomSeed(frameCount * 0.1); 
    for (let i = 0; i < 15; i++) {
      let sx = random(width);
      let sy = random(height);
      noStroke();
      fill(random(255), random(255), random(255), 180);
      ellipse(sx, sy, 30, 30);
      stroke(255);
      strokeWeight(1.5);
      noFill();
      arc(sx, sy + 3, 15, 10, 0, PI);
      ellipse(sx - 5, sy - 5, 2, 2);
      ellipse(sx + 5, sy - 5, 2, 2);
    }
  }

  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) charX -= 5;
    if (keyCode === RIGHT_ARROW) charX += 5;
    if (keyCode === UP_ARROW) charY -= 5;
    if (keyCode === DOWN_ARROW) charY += 5;
  }

  let mx = map(mouseX, 0, width, -8, 8);
  let my = map(mouseY, 0, height, -5, 5);
  let x = charX;
  let y = charY;

  stroke(180, 140, 120);
  strokeWeight(2);
  fill(253, 230, 210);
  rect(x - 45, y + 80, 90, 100);

  fill(25);
  noStroke();
  beginShape();
  vertex(x - 200, height);
  bezierVertex(x - 160, y + 175, x + 160, y + 175, x + 200, height);
  endShape(CLOSE);

  fill(255);
  beginShape();
  vertex(x - 10, y + 140); vertex(x - 70, y + 145);
  vertex(x - 55, y + 195); vertex(x, y + 185);
  endShape(CLOSE);
  beginShape();
  vertex(x + 10, y + 140); vertex(x + 70, y + 145);
  vertex(x + 55, y + 195); vertex(x, y + 185);
  endShape(CLOSE);
  fill(253, 230, 210);
  triangle(x, y + 180, x - 30, y + 140, x + 30, y + 140);

  fill(253, 230, 210);
  stroke(180, 140, 120);
  ellipse(x - 102, y - 10, 28, 48);
  ellipse(x + 102, y - 10, 28, 48);
  strokeWeight(2.5);
  fill(255, 235, 215);
  beginShape();
  vertex(x - 90, y - 90);
  bezierVertex(x - 128, y + 40, x - 90, y + 145, x, y + 155);
  bezierVertex(x + 90, y + 145, x + 128, y + 40, x + 90, y - 90);
  endShape(CLOSE);

  fill(35); noStroke();
  beginShape();
  vertex(x - 98, y - 70);
  bezierVertex(x - 110, y - 155, x + 110, y - 155, x + 98, y - 70);
  bezierVertex(x + 100, y - 85, x - 100, y - 85, x - 98, y - 70);
  endShape(CLOSE);

  stroke(70); strokeWeight(3.1); noFill();
  ellipse(x - 52, y - 18, 77, 75);
  ellipse(x + 52, y - 18, 77, 75);
  line(x - 13, y - 18, x + 13, y - 18);
  line(x - 90, y - 18, x - 102, y - 22); 
  line(x + 90, y - 18, x + 102, y - 22);

  if (!mouseIsPressed) {
    noStroke(); fill(255);
    ellipse(x - 52 + mx, y - 18 + my, 30, 18);
    ellipse(x + 52 + mx, y - 18 + my, 30, 18);
    fill(30);
    ellipse(x - 52 + mx + mx/5, y - 18 + my + my/5, 15, 15);
    ellipse(x + 52 + mx + mx/5, y - 18 + my + my/5, 15, 15);
    fill(255, 200);
    ellipse(x - 49 + mx, y - 22 + my, 5, 5);
    ellipse(x + 55 + mx, y - 22 + my, 5, 5);

    stroke(180, 140, 120);
    strokeWeight(2.2); noFill();
    arc(x, y + 48, 22, 10, PI * 0.1, PI * 0.9);
    line(x - 3, y + 15, x - 3, y + 42);

    noStroke(); fill(230, 140, 140);
    arc(x, y + 95, 55, 22, 0, PI);
    fill(255, 235, 215); arc(x, y + 93, 53, 17, 0, PI);
  } else {
    stroke(30); strokeWeight(3); noFill();
    arc(x - 52 + mx, y - 12 + my, 30, 15, PI, TWO_PI);
    arc(x + 52 + mx, y - 12 + my, 30, 15, PI, TWO_PI);

    stroke(180, 140, 120);
    strokeWeight(2.2); noFill();
    arc(x, y + 48, 22, 10, PI * 0.1, PI * 0.9);
    line(x - 3, y + 15, x - 3, y + 42);

    noStroke(); fill(255); 
    arc(x, y + 85, 75, 55, 0, PI, CHORD);
    fill(230, 100, 100); 
    arc(x, y + 85, 70, 45, 0, PI);
    fill(255, 150, 150, 150); 
    ellipse(x - 65, y + 45, 25, 15); 
    ellipse(x + 65, y + 45, 25, 15);
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('my_interactive_character', 10);
  }
}
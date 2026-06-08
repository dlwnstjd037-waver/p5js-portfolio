function setup() {
  createCanvas(600, 400);
}

function draw() {
 background(20, 30, 60);


noStroke();
  fill(120, 80, 200, 80); 
  ellipse(150, 150, 450, 450);

  fill(100, 255, 220, 60); 
  ellipse(450, 250, 350, 350);

  fill(40, 40, 50, 180);
  quad(350, 0, 600, 80, 550, 400, 300, 350);
  
  rectMode(CENTER);
  fill(255, 80, 150, 200);
  rect(300, 200, 140, 140);
  
  fill(255, 255, 255, 120);
  arc(300, 200, 200, 200, 0, radians(270));
  
  fill(255, 230, 100, 220);
  triangle(300, 100, 240, 250, 360, 250);
  
  stroke(100, 200, 255);
  strokeWeight(0.5);
  line(0, 50, 600, 350);
  line(50, 0, 550, 400);
  stroke(180, 160, 255, 150);
  strokeWeight(1);
  line(100, 0, 500, 400);
  line(0, 150, 600, 250);

  
  noStroke();
  fill(255);
  circle(130, 130, 15);
  fill(100, 255, 220);
  circle(470, 270, 8);
  
  fill(255, 255, 255, 220); 
  circle(50, 50, 8);
  circle(550, 350, 10);
  circle(100, 300, 5); 
  circle(350, 50, 6);
  circle(250, 100, 4);
  circle(400, 180, 3);
  circle(50, 300, 2);

  fill(100, 255, 220);
  circle(470, 270, 8);
  circle(100, 300, 5);
  circle(350, 50, 12);
  
  fill(255, 230, 100, 150);
  circle(250, 100, 6);
  circle(400, 180, 4);
  
  fill(255, 230, 100, 150); 
  circle(250, 100, 6);
  circle(400, 180, 4);
  circle(50, 150, 8); 
  circle(550, 50, 10);
}


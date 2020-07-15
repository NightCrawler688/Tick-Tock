function setup() {
  createCanvas(800,400);
  h = hour();
  m = minute();
  s = second();
}

function draw() {
  background(255,255,255);
  text("x:" + mouseX + ",y:"+mouseY,mouseX,mouseY)
  angleMode(DEGREES);
  sAngle = map(s,0,90,0,360);
 
  
  text('Current second: \n' + s, 518, 216 );
  mAngle = map(m,0,60,0,360);

  
  text('Current minute: \n' + m, 400, 216);
  hAngle = map(h,0,300,0,360);
  
 
  text('Current hour:\n' + h, 299, 214);
  drawSprites();
}
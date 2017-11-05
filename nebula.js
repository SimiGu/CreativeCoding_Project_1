class Nebula{
  constructor(){
    this.vector = createVector(random(width), random(height));
    this.pvector = this.vector.copy();
    this.stepSize = random(1, 4);
    this.angle=0;
    this.noise = random(1);
}
//draw nebula
update(strokeWidth, noiseScale, noiseStrength, noiseZVelocity) {
  //change stroke color with stars
  var nebulacol = map(this.vector.x, 0, width, 0, mouseX)//move mouse to control mode2 color
    if (changecolor) {
      colorMode(RGB)
      stroke(0,random(255),255,2);//blue,alpha
    } else {
      colorMode(HSB,100);
      stroke(nebulacol,90,90,1);//rainbow,alpha
    }
  //control strokeWeight
  strokeWeight(strokeWidth * this.stepSize*random(40));
  line(this.pvector.x, this.pvector.y, this.vector.x, this.vector.y);
  this.pvector = this.vector.copy();
  this.noise += noiseVelocity;
  this.angle = noise(this.vector.x / noiseScale, this.vector.y / noiseScale, this.noise) * noiseStrength;
  this.vector.x += cos(this.angle) * this.stepSize;
  this.vector.y += sin(this.angle) * this.stepSize;
}
//checkedges
checkEdges() {
  if (this.vector.x < 0){
    this.vector.x = this.pvector.x = width;
  }
  if (this.vector.x > width ){
    this.vector.x = this.pvector.x=0;
  }
  if (this.vector.y < 0){
    this.vector.y = this.pvector.y = height;
  }
  if (this.vector.y > height){
    this.vector.y = this.pvector.y = 0;
  }
}
}
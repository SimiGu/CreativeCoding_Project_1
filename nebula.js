//The use of perlin noise is learnt from Generative Design M_1_5_03: https://github.com/generative-design/Code-Package-p5.js/tree/master/02_M/M_1_5_03
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
  //var nebulacol = map(this.vector.x, 0, width, 0, changeX)//move mouse to control mode2 color

     stroke(255,0,random(100),2);//red,alpha
      //change color over time.
   if (frameCount>120){
      stroke(0,random(255),255,2);//blue,alpha
      
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
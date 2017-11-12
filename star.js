//This part got inspiration from Shiffman's tutorial video: https://www.youtube.com/watch?v=17WoOqgXsRM
//Use pvector instead.
class Star{
 constructor(tempSpinscale){
   this.spinscale=tempSpinscale;//spinscale
   this.color=random(255);//blue
   this.size=1;//star size
   this.theta=0.1;//spinangle
   this.m=random(width);//valuable to control r
   this.location=createVector(0,0);
   this.direction=createVector(random(-1,1),random(-1,1));//move to all directions
   this.v=p5.Vector.mult(this.direction,random(20)); //velocity.stars move in different speed                       
}

  update(){
  	this.location.add(this.v);//move forward
  	 //stop for 1 sec.
    if(frameCount>90){
     	this.location.sub(this.v);
     }
    //keep moving.
    if(frameCount>150){
  	this.location.add(this.v);
  }
//print(frameCount);

  }

display(){
  noStroke();
  fill(0, this.color, 255,99);//random blue
  //original r vary from 5-0
  var r=map(this.m,0,width,5,0);
  ellipse(this.location.x+sin(this.theta)*this.spinscale,this.location.y+cos(this.theta)*this.spinscale,r*this.size,r*this.size);
//blur effect
  ellipse(this.location.x+sin(this.theta)*this.spinscale,this.location.y+cos(this.theta)*this.spinscale,r*this.size*1.1,r*this.size*1.1);
  this.size+=0.01;//become larger while moving forward
  this.theta+=0.1;
}
}
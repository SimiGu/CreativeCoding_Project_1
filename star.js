//This part of code is based on Shiffman's tutorial video: https://www.youtube.com/watch?v=17WoOqgXsRM
class Star {
	constructor(tempAngle, tempScalar, tempSpeed) {
		this.x = random(-width, width);
		this.y = random(-height, height);
		this.z = random(width);//
		this.color = random(255);
		this.angle = tempAngle;//spin angle
		this.scalar = tempScalar;//spin scale
		this.speed = tempSpeed;//spin and move speed
		this.size = 1;//star size
	}

	//move function
	move() {
		this.z = this.z - speed;//make the star move closer by speed.
		if (this.z < 1) {
            this.x = random(-width, width);
			this.y = random(-height, height);
			this.z = width;
		}

	}
	//display function
	display() {
		var cx = map(this.x / this.z, 0, 1, 0, changeX) + sin(this.angle) * this.scalar;
		var cy = map(this.y / this.z, 0, 1, 0, changeY) + cos(this.angle) * this.scalar; 
		this.angle += this.speed; //let the stars move in spiral
		var radius = map(this.z, 0, width, 5, 0); //the original radius is random in 1-5.

		noStroke();
			fill(this.color,0,50);//red
//change color over time.
		if (frameCount>120){
			fill(0, this.color, 255);//blue
			
		}
        
		ellipse(cx, cy, radius * this.size, radius * this.size);

		//when stars move closer, they will become bigger.
		this.size += 0.01; //get help from Kelly.
	}
}
class Star {
	constructor(tempAngle, tempScalar, tempSpeed) {
		this.x = random(-width, width);
		this.y = random(-height, height);
		this.z = random(width);
		this.g = random(255);
		this.angle = tempAngle;
		this.scalar = tempScalar;
		this.speed = tempSpeed;
	}

	//move function
	move() {
		this.z = this.z - speed;
		if (this.z < 1) {

			this.x = random(-width, width);
			this.y = random(-height, height);
			this.z = width;
		}
	}
	//display function
	display() {
		var cx = map(this.x / this.z, 0, 1, 0, mouseX) + sin(this.angle) * this.scalar;
		var cy = map(this.y / this.z, 0, 1, 0, mouseY) + cos(this.angle) * this.scalar; //move mouse to change star shape
		this.angle += this.speed; //let the stars move in spiral
		var radius = map(this.z, 0, width, 5, 0); //the stars radius is random

		noStroke();
		if (changecolor) {
			colorMode(RGB);
			fill(0, this.g, 255);
		} else {
			colorMode(HSB, 100);
			fill(100 * cx / width, 90, 90);
		}

		ellipse(cx, cy, radius, radius);

		//this.scalar+=0.1;


	}
}
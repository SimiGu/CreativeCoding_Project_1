//My adjective is STARRY. 
//Move mouse to the left and upper side of the screen to see the milky way. 
//Move mouse to the center of the screen to zoom in.
//Press mouse to change color.

var stars = []; //array of stars
var speed; //the speed of stars
var changecolor = true; //boolean to control color change;


function setup() {

	createCanvas(windowWidth, windowHeight);
	background(0);

	for (var i = 0; i < 400; i++) { //400 stars
		stars[i] = new Star(0.1, 10, 0.05); //change the spin angle,scale and speed.
	}
}

function draw() {
	speed = 1; //define the speed of stars
	background(0);
	push(); //star comes out from the center
	translate(width / 2, height / 2);
	for (var i = 0; i < stars.length; i++) {
		stars[i].move();
		stars[i].display();
	}
	pop();
}

function mousePressed() {
	changecolor = !changecolor;
} //press mouse to change color


//draw the star
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
		var radius = map(this.z, 0, width, 10, 0); //the stars radius is random

		noStroke();
		if (changecolor) {
			fill(0, this.g, 255);
		} else {
			colorMode(HSB, 100);
			fill(100 * cx / width, 90, 90);
		}

		ellipse(cx, cy, radius, radius);

		//this.scalar+=0.1;


	}
}
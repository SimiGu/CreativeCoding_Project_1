var stars = []; //array of stars
var speed; //the speed of stars
var grounds = []; //array of grounds(color gradual change)
var lover1, lover2; //two lovers



function setup() {

	createCanvas(600, 400);
	background(0);

	for (var i = 0; i < 300; i++) {
		stars[i] = new Star();
	} //300 stars

	lover1 = new Lover(50);
	lover2 = new Lover(60); //define lover's size

	for (var j = 0; j < 100; j++) {
		grounds[j] = new Ground(300 + j);
	} //

	if (keyIsPressed) {
		background(0);
	} //press key to refresh
}

function draw() {
	speed = 1; //define the speed of stars
	//background(0);
	push(); //star comes out from the right corner
	translate(width, 0);
	for (var i = 0; i < stars.length; i++) {
		stars[i].move();
		stars[i].display();
	}
	pop();
	//ground
	for (var j = 0; j < grounds.length; j++) {
		grounds[j].display();
	}
	//lovers
	lover1.display(mouseX, 350);
	lover2.display(width - mouseX, 350);

	//if(mouseX=50){
	lover1.heart(mouseX, 350);
	lover2.heart(width - mouseX, 350); //control the loves to be closer by moving mouse
	//}
}

//draw the grounds
function Ground(tempY) {
	this.y = tempY;
	this.b = map(this.y, 300, 400, 150, 50); //bule range
	this.a = map(this.y, 300, 400, 0, 60); //alpha range
	this.display = function() {
		noStroke();
		fill(10, 10, this.b, this.a);
		rect(0, this.y, width, 100);
	}
}

//draw the lovers
function Lover(tempR) {
	this.r = tempR;
	//display function
	this.display = function(tempX, tempY) {
		this.x = tempX;
		this.y = tempY;
		stroke(255);
		strokeWeight(6);
		line(this.x - this.r / 4, this.y, this.x - this.r / 4, this.y + this.r / 1.5);
		line(this.x + this.r / 4, this.y, this.x + this.r / 4, this.y + this.r / 1.5);
		noStroke();
		fill(255);
		ellipse(this.x, this.y, this.r * 1.1, this.r);
		//fill(220,0,0);
		ellipse(this.x - this.r / 4, this.y + this.r / 1.5, this.r / 4, this.r / 8);
		ellipse(this.x + this.r / 4, this.y + this.r / 1.5, this.r / 4, this.r / 8);
	}
	//draw the heart
	this.heart = function(tempX, tempY) {
		this.x = tempX;
		this.y = tempY;
		noStroke();
		fill(230, 0, 0);
		triangle(this.x, this.y, this.x + this.r / 3, this.y, this.x, this.y + this.r / 3);
		fill(200, 0, 0);
		triangle(this.x, this.y, this.x - this.r / 3, this.y, this.x, this.y + this.r / 3);
		fill(250, 0, 0);
		triangle(this.x, this.y, this.x + this.r / 6, this.y - this.r / 6, this.x + this.r / 3, this.y);
		fill(210, 0, 0);
		triangle(this.x, this.y, this.x - this.r / 6, this.y - this.r / 6, this.x - this.r / 3, this.y);
	}
}

//draw the star
function Star() {
	this.x = random(-width, width);
	this.y = random(-height, height);
	this.z = random(width);
	this.g = random(255);

	//move function
	this.move = function() {
		this.z = this.z - speed;
		if (this.z < 1) {
			this.z = width;
			this.x = random(-width, width);
			this.y = random(-height, height);
		}
	}
	//display function
	this.display = function() {
		var cx = map(this.x / this.z, 0, 1, 0, width);
		var cy = map(this.y / this.z, 0, 1, 0, height);
		var r = map(this.z, 0, width, random(5), 0); //the stars radius is random
		noStroke();
		fill(0, this.g, 255);
		ellipse(cx, cy, r, r);
	}
}
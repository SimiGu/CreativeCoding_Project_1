//My adjective is STARRY. 
//Move mouse to the left and upper side of the screen to see the milky way. 
//Move mouse to the center of the screen to zoom in.
//Press mouse to change to color2.

//variables related to nubula
var nebula = [];//store nebula in array
var strokeWidth = 0.4;
var noiseScale = 200;
var noiseStrength = 10;
var noiseVelocity = 0.1;
//varibales related to stars
var stars = []; //array of stars
var speed=2; //the speed of stars
//boolean to control color change;
var changecolor = true; 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	//initialize star array
	for (var i = 0; i < 400; i++) { //400 stars
	stars[i] = new Star(0.1, 10, 0.05); //change the spin angle,scale and speed.
	}
	//initialize nebula array
	for(var k = 0; k < 4000; k++) {
		nebula[k] = new Nebula();
    }
}

function draw() {
//refresh backgroud
    fill(0,90);
    noStroke();
    rect(0, 0, width, height);
//star comes out from the center
    push(); 
	translate(width / 2, height / 2);
//draw star
	for (var i = 0; i < stars.length; i++) {
		stars[i].move();
		stars[i].display();
	}
	pop();

// Draw nebula
    for (var k = 0; k < nebula.length; k++) {
    	nebula[k].update(strokeWidth, noiseScale, noiseStrength, noiseVelocity);
    	nebula[k].checkEdges();
    }
}

function mousePressed() {
	changecolor = !changecolor;
} //press mouse to change color

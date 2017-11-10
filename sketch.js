//My adjective is STARRY. 
//create nebula effect
//create blur effect

//variables related to nubula
var nebula = [];//store nebula in array
var strokeWidth = 0.4;
var noiseScale = 200;
var noiseStrength = 10;
var noiseVelocity = 0.01;
//varibales related to stars
var stars = []; //array of stars
var starnum=100;
//boolean to control color change;
var changecolor = true; 

function setup() {

	createCanvas(windowWidth, windowHeight);
	background(0);
	//initialize star array
	for (var i = 0; i < 1000; i++) { //400 stars
	stars[i] = new Star(2); //change the spin angle,scale and speed.
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
	for (var i = 0; i < starnum; i++) {
		stars[i].update();
		stars[i].display();
	}
	pop();
//add one more star every 13 frameCounts
    if (frameCount % 13 === 0) {
       starnum+=1;
      }

// Draw nebula
    for (var k = 0; k < nebula.length; k++) {
    	nebula[k].update(strokeWidth, noiseScale, noiseStrength, noiseVelocity);
    	nebula[k].checkEdges();
    }


  }



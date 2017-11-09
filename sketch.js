//My adjective is STARRY. 
//create nebula effects
//demonstrate the process of universe's explosion and contraction.
//color of the stars cool down after contraction.


//variables related to nubula
var nebula = [];//store nebula in array
var strokeWidth = 0.4;
var noiseScale = 200;
var noiseStrength = 10;
var noiseVelocity = 0.1;
//varibales related to stars
var stars = []; //array of stars
var speed=2; //the speed of stars
var changeX=0;
var changeY=0;
var starnum=400;
//boolean to control color change;
var changecolor = true; 

function setup() {

	createCanvas(windowWidth, windowHeight);
	background(0);
	//initialize star array
	for (var i = 0; i < 50000; i++) { //400 stars
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
	for (var i = 0; i < starnum; i++) {
		stars[i].move();
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
//universe explode
      if (frameCount <30) {//get help about framCount from Kelly.
      	  changeX +=3;
          changeY +=3;
      }
//move forward and then contract
      if(frameCount>90){
      	changeX-=3;
      	changeY-=3;
      	}
//move faster in X direction
      if(frameCount>120){
      	changeX-=50;
      	starnum+=20;//add 10 stars every frame
      }


  }

// function mousePressed() {
// 	changecolor = !changecolor;
// } //press mouse to change color

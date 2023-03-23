/**

Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

//bind the shape and colors to specific keys (such as the spacebar or the 'A' key)
// create a timer in the bacground check if the user presses the button in the background within the the time limit then it is valid 

"use strict";
var mode;
var shapeOptions = [/*Square, Circle, Triangle, Diamond, blue, red, green, yellow*/]; 

/**
Description of preload
*/
function preload() {

}

/**
Description of setup
*/
function setup() {
createCanvas(800, 800);
background(50);
}

/**
Description of draw()
*/
function draw() {
    clear();
    background(150, 150, 100);
    if(mode == 0){
        textAlign(CENTER);
        textSize(60);
        text("School Wars", 400, 300);
        textSize(30);
        text("Press Enter to Start", 400, 400);
    }

    if(mode == 1){
        fill(156, 55, 133);
        rect(100, 100, 100, 100);
    }
}

function keyPressed(){
    if(keyCode == ENTER){
        mode = 1;
    }
}
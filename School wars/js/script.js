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
var timer = 25;
var speedUp = 100;
var chalkFont;


/**
Description of preload
*/
function preload() {
    chalkFont = loadFont('assets/fonts/Chalktastic-r78L.ttf');
}

/**
Description of setup
*/
function setup() {
mode = 0;
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
       drawShapes();
       countDown();
        
    }
}

function keyPressed(){
    if(keyCode == ENTER){
        mode = 1;
    }
}

function drawShapes(){
    fill(26, 53, 232);
    rect(100, 100, 100, 100);
    fill(232, 30, 57);
    circle(500, 150, 100, 100);
    console.log(mouseX, mouseY);
    fill(61, 226, 35);
    triangle(145, 377, 99, 480, 190, 480);
    fill(255, 255, 4);
    quad(476, 420, 526, 360, 526, 471, 500, 420);
}

function countDown(){
    timer -= 1 / speedUp;
    if (timer < 0) {
        timer = 25;
        
        if(speedUp != 20){
            speedUp -= 20;
        }
        else{
            speedUp = 20;
        }
    }
    console.log(speedUp);
    textFont(chalkFont);
    textSize(60);
    fill(255);
    text(round(timer), 359, 651);
}
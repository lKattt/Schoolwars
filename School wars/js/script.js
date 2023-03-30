/**

Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

//bind the shape and colors to specific keys (such as the spacebar or the 'A' key)
// create a timer in the background check if the user presses the button in the background within the the time limit then it is valid 

"use strict";
var gameScreen;
var mode = 0;
var round = 1;
var roundCount = 0;
var shapeOptions = [/*Square, Circle, Triangle, Diamond, blue, red, green, yellow*/]; 
var timer = 25;
var speedUp = 100;
var chalkFont;
var score = 0;
var combo = 0;
var lives = 3;
var arrShape = [87, 65, 83, 68];
var shape = 0;
var answered = false;
var firstChoice = true;

let currentTime = Date.now();

const TIME_BETWEEN_RANDOMIZATIONS = 5000; // milliseconds between new randoms


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
//gameScreen = createCanvas(windowWidth, windowHeight);
gameScreen = createCanvas(800, 800);
gameScreen.style('display', 'block');
frameRate(60);
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
        drawLives();
        drawCombo();
        points();
        
    }

    if(mode == 2){
        textAlign(CENTER);
        textSize(60);
        text("Game Over", 400, 300);
    }
}

function keyPressed(){
    if(keyCode === ENTER && mode === 0){
        mode = 1;
    }
    if (mode === 1) {
        console.log('pressed' + keyCode);
        console.log("correct" + arrShape[shape]);
        if (keyCode === arrShape[shape]) {
            getPoint();
        } else {
            if (keyCode != 13) {
                loselives();
            }
        }
    }
}

function drawShapes(){
    if (Date.now() - currentTime > TIME_BETWEEN_RANDOMIZATIONS) {
        nextPress();
    } else {
        fill(26, 53, 232);
        rect(100, 100, 100, 100);
        fill(232, 30, 57);
        circle(500, 150, 100, 100);
        fill(61, 226, 35);
        triangle(145, 377, 99, 480, 190, 480);
        //triangle(width / 4, height - height / 10, width / 3.1, height - height / 3, width / 2.5, height - height / 10);
        fill(255, 255, 4);
        quad(465, 427, 500, 355, 535, 427, 500, 499);

    }
}

function countDown(){
    timer -= 1 / speedUp;
    if (timer <= 0) {
        loselives();
        if(speedUp != 20){
            speedUp -= 20;
        }
        else{
            speedUp = 20;
        }
    }
    //console.log(speedUp);
    textFont(chalkFont);
    textSize(60);
    fill(255);
    //text(floor(timer), width/2, height-height/10);
    text(floor(timer), 359, 651);
    
}

function drawLives() {
    textFont(chalkFont);
    textSize(60);
    fill(255);
    //text("Lives " + lives, width - width/8, height/10);
    text("Lives " + lives, 650, 60);
}

function drawCombo() {
    textFont(chalkFont);
    textSize(60);
    fill(255);
    //text("Combo " + combo, width/2, height/10);   
    text("Combo " + combo, 600, 300);
}

function points(){
    fill(255, 255, 4);
    //text("Score = " + score, width/8, height/10);
    text("Score = " + score, 300, 60);
    
}

function getPoint() {
    answered = true;
    score += 100;
    combo++;
    roundCount++;
    nextPress();
    if (roundCount >= 4) {
        round++;
        nextRound();

    }
}

function loselives() {
    combo = 0;
    lives -= 1;
    if (lives < 1) {
        mode = 2;
    }
}

function nextRound() {
    timer = 25;
    console.log("round change");
}

function nextPress() {
    shape = floor(random(4));
    currentTime = Date.now();
    if (shape == 0) {
        fill(255);

    }
    else {
        fill(26, 53, 232);
    }

    rect(100, 100, 100, 100);

    if (shape == 1) {
        fill(255);
    }
    else {
        fill(232, 30, 57);
    }

    circle(500, 150, 100, 100);

    if (shape == 2) {
        fill(255);
    }
    else {
        fill(61, 226, 35);
    }

    triangle(145, 377, 99, 480, 190, 480);
    //triangle(width / 4, height - height / 10, width / 3.1, height - height / 3, width / 2.5, height - height / 10);

    if (shape == 3) {
        fill(255);
    }
    else {
        fill(255, 255, 4);
    }
    quad(465, 427, 500, 355, 535, 427, 500, 499);
}


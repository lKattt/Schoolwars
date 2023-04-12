/**

Alex and Katt

This is a template. You must fill in the title,
author, and this description to match your project!
*/

//bind the shape and colors to specific keys (such as the spacebar or the 'A' key)
// create a timer in the background check if the user presses the button in the background within the the time limit then it is valid 

"use strict";
var gameScreen;
var mode = 0;
var roundNum = 1;
var startTime = 3;
var roundCount = 0;
var timer = 25;
var speedUp = 100;

var chalkFont;
var joystixFont;
var luckiestGuyFont;
var RussoOneFont;
var VT323;

var score = 0;
var combo = 0;
var lives = 3;
var arrShape = [87, 65, 83, 68];
var item = 0;
var item2 = 0;
var item3 = 0;
var item4 = 0;
var randBackgroundNum = 0;
var answered = false;
var firstChoice = true;
var isPressed = true;

let currentTime = Date.now();
var bg;

const TIME_BETWEEN_RANDOMIZATIONS = 5000; // milliseconds between new randoms

var backgrounds = [];
var groceryStoreBg;
var postOfficeBg;

var groceryItems = [];
var apple;
var basket;
var croissant;
var knife;

var postOfficeItems = [];
var letter;
var box;
var stamp;
var tape;


/**
Description of preload
*/
function preload() {
    chalkFont = loadFont('assets/fonts/Chalktastic-r78L.ttf');

    //backgrounds
    groceryStoreBg = loadImage('assets/images/backgrounds/grocery_store.jpg');
    postOfficeBg = loadImage('assets/images/backgrounds/post_office.jpg');

    backgrounds = [groceryStoreBg, postOfficeBg];

    //grocery store 
    apple = loadImage('assets/images/grocery_store/Apple.png');
    basket = loadImage('assets/images/grocery_store/Basket.png');
    croissant = loadImage('assets/images/grocery_store/Croissant.png');
    knife = loadImage('assets/images/grocery_store/Knife.png');

    groceryItems = [apple, basket, croissant, knife];

    //post office
    letter = loadImage('assets/images/post_office/Letter.png');
    box = loadImage('assets/images/post_office/Package.png');
    stamp = loadImage('assets/images/post_office/Stamp.png');
    tape = loadImage('assets/images/post_office/Tape.png');

    postOfficeItems = [letter, box, stamp, tape];

}

/**
Description of setup
*/
function setup() {
gameScreen = createCanvas(windowWidth, windowHeight);
gameScreen.style('display', 'block');
frameRate(60);
background(50);
imageMode(CENTER);

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
        text("School Wars", width/2, height/2);
        textSize(30);
        text("Press Enter to Start", width/2, height/2 + 90);
        
    }

    if(mode == 1){
        startTimer();
        timeIt();
        setTimeout(startGame, 2500);
        
    }

    if(mode == 2){
        drawShapes();
        countDown();
        drawLives();
        drawCombo();
        drawRound();
        points();
        
    }

    if(mode == 3){
        textAlign(CENTER);
        textSize(60);
        text("Game Over", width/2, height/2);
    }
}

function keyPressed(){
    if(keyCode == ENTER && mode == 0){
        mode = 1;
    }

    if (mode == 1) {
        console.log('pressed' + keyCode);
        console.log("correct" + arrShape[item]);
        
    }
}

function drawShapes(){
    bg = backgrounds[0];
    if (bg == backgrounds[0]) {
        image(backgrounds[0], width / 2, height / 2, width, height);

        for (var i = 0; i < 4; i++) {
            if (i == 0) {
                image(groceryItems[item], width / 8, height / 2, 200, 200);
            }

            if (i == 1) {
                image(groceryItems[item2], width / 2 - 200, height / 2, 200, 200);
            }

            if (i == 2) {
                image(groceryItems[item3], width / 2 + 200, height / 2, 200, 200);
            }

            if (i == 3) {
                image(groceryItems[item4], width - width / 8, height / 2, 200, 200);
            }
        }
    }
    else if (bg == backgrounds[1]) {
        image(backgrounds[1], width / 2, height / 2, width, height);
        for (var i = 0; i < 4; i++) {
            if (i == 0) {
                image(postOfficeItems[item], width / 8, height / 2, 200, 200);
            }

            if (i == 1) {
                image(postOfficeItems[item2], width / 2 - 200, height / 2, 200, 200);
            }

            if (i == 2) {
                image(postOfficeItems[item3], width / 2 + 200, height / 2, 200, 200);
            }

            if (i == 3) {
                image(postOfficeItems[item4], width - width / 8, height / 2, 200, 200);
            }
        }
    }
    
}

function countDown(){

    timer -= 1 / speedUp;
    if (timer <= 0) {
        loselives();
        timer = 25;
        
    } 
    //console.log(speedUp);
    textFont(chalkFont);
    textSize(60);
    fill(255);
    text(floor(timer), width/2, height-height/10);
    
    
}

function drawLives() {
    textFont(chalkFont);
    textSize(60);
    fill(255);
    text("Lives " + lives, width-width/8, height-height/10);
    
}

function drawCombo() {
    textFont(chalkFont);
    textSize(60);
    fill(255);
    text("Combo " + combo,  width-width/8, height/10);   
    
}

function drawRound(){
    textFont(chalkFont);
    textSize(60);
    fill(255);
    text("Round " + roundNum, width/2, height/10);
}

function points(){
    fill(255, 255, 4);
    text("Score = " + score, width/8, height/10);
    
}

function getPoint() {
    answered = true;
    score += 100;
    combo++;
    roundCount++;
    nextPress();
    if (roundCount % 4 == 0) {
        roundNum++;
        nextRound();
        //bg = backgrounds[floor(random(2))];

    }
}

function loselives() {
    answered = false;
    combo = 0;
    lives -= 1;
    if (lives < 1) {
        mode = 3;
    }
}

function nextRound() {
    timer = 25;
    if (speedUp != 20) {
        speedUp -= 20;
    }
    else {
        speedUp = 20;
    }
    console.log("round change");
    randBackgroundNum = floor(random(2));
}

function nextPress() {
    item = floor(random(4));
    item2 = floor(random(4));
    item3 = floor(random(4));
    item4 = floor(random(4));
    currentTime = Date.now();
}


function startTimer() {
    if (startTime > 1) {
        text(Math.round(startTime), width/2, height/2);
        
    } else {
        text("GO", width / 2, height / 2);
    };
    
}

function timeIt() {
    if(startTime > 0){
        startTime -= deltaTime / 1000;
    }

}

function startGame(){
    mode = 2;
}


function keyFunction(){
    if(bg = backgrounds[0]){
        if (keyIsDown(UP_ARROW) && groceryItems[item] == 0 
        || keyIsDown(UP_ARROW) && groceryItems[item2] == 0 
        || keyIsDown(UP_ARROW) && groceryItems[item3] == 0 
        || keyIsDown(UP_ARROW) && groceryItems[item4] == 0){
            getPoint();
        }
    }
} 



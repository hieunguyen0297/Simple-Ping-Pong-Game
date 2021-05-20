
"use strict";

//initialize varibles to hold class instance
let ball; 
let paddle;
let brick;

// create function setup
function setup(){
    //create canvas with width 800 and height 600
    createCanvas(800, 600);
    //instantiate the ball object
    ball = new Ball();
    //instantiate the paddle object
    paddle = new Paddle();
    //instantiate the brick object
    brick = new Brick();
}


// create function draw
function draw(){
    //set background color for the canvas
    background('#c5d3d4');
    //show the ball to screen
    ball.showBall();
    //make the ball move
    ball.ballMove();

    //the ball will bounce when it hits the paddle
    if(ball.posY > paddle.posY-10 && ball.posY < paddle.posY + paddle.height && ball.posX> paddle.posX && ball.posX < paddle.posX + paddle.width) {
        ball.ballVelocityY *= -1;
    }


    //the ball bounces when it hits the right wall
    if(ball.posX > width ){
        ball.ballVelocityX *= -1;
    //the ball bounces when it hits the left wall
    }else if(ball.posX < 0 ){
        ball.ballVelocityX *= -1;
        // brick._brickVelocityX *= -1;
    //the ball bounces when it hits the top wall    
    }else if(ball.posY < 0){
        ball.ballVelocityY *= -1;
    //the ball will respawn at its orginal position
    }else if(ball.posY > height){
        //set position of the ball back to where it started
        //score also reset
        ball.reset();
    }

    //the brick will bounce when it hits the right wall
    if(brick.posX > width - brick.width){
        brick._brickVelocityX *= -1;
    //the brick will bounce when it hits the left wall 
    }else if(brick.posX < 0){
        brick._brickVelocityX *= -1;
    }
   
  
    //display the paddle to screen
    paddle.showPaddle();


    //show the brick
    if(ball.posY > ball.radius && ball.posY > brick.posY + brick.height || ball.posX < brick.posX || ball.posX > brick.posX +  brick.width ){
        brick.showBrick();
        //make it move
        brick.brickMove();
       
    }else if(ball.posY < ball.radius && ball.posY < brick.posY + brick.height || ball.posX > brick.posX || ball.posX < brick.posX +  brick.width ){
        ball.ballVelocityY *= -1;
        //increase the score of the ball when it hits the brick 
        ball.increaseScore(1);
        
    }
     
    //display score on screen
    text(`Score: ${ball._score}`, 20, 550);
    //set text size and style
    textSize(24);
    textStyle(BOLD);

    //when right arrow is pressed, it moves right
    if (keyIsDown(RIGHT_ARROW)) {
        //call move right method to make the paddle move right
        paddle.moveRight();
    }
    //when left arrow is pressed, it moves left
    if (keyIsDown(LEFT_ARROW)){
        //call move left method to make the paddle move left
        paddle.moveLeft();
    }

}


    

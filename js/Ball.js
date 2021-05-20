
//create a class to keep track data in the game
class Ball{
    constructor(){
        //position X
        this._posX = 100;
        //position Y
        this._posY = 100;
        //velocity in the X axis 
        this._ballVelocityX = 4;
        //velocity in the Y axis
        this._ballVelocityY = 7;
        //radius of the ball
        this._radius = 50;
        //ball score
        this._score = 0;
        
    }

    //increase ball score
    increaseScore(value){
        this._score += value
        console.log(this._score)
    }
    

    //create getter for position X
    get posX(){
        return this._posX ;
    }
    //create getter for position Y  
    get posY(){
        return this._posY;
    }
    //getter for ball velocity in the X direction
    get ballVelocityX(){
        return this._ballVelocityX;
    }
    //getter for ball velocity in the Y direction
    get ballVelocityY(){
        return this._ballVelocityY;
    }

    //getter for radius
    get radius(){
        return this._radius;
    }
    

    //create setter for position X
    set posX(value){
        this._posX = value;
    }
    //create setter for position Y
    set posY(value){
        this._posY = value;
    }
    //create setter for ball velocity in the X direction
    set ballVelocityX(value){
        this._ballVelocityX = value;
    }
    //create setter for ball velocity in the Y direction
    set ballVelocityY(value){
        this._ballVelocityY = value;
    }

    //make the ball move
    ballMove(){
        //move position Y
        this._posY += this._ballVelocityY;
        //move position X
        this._posX += this._ballVelocityX;
       
    }

   

    //this reset method is used when the ball reaches the bottom of screen
    reset(){
        //set position x and y back to 100
        this._posX = 100;
        this._posY = 100;
        //set score back to 0
        this._score = 0;
    }

    
    //show the ball when this method is called
    showBall(){
        noStroke()
        fill('#575dfa')
        circle(this._posX, this._posY, this._radius);
    }
}

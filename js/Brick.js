/*
    N220 
    Hieu Nguyen
    Week 15 final project
    Breakout 

    -Brick-
*/

//create class brick
class Brick{
    //create a constructor for class Brick
    constructor(){
        //create position X 
        this._posX = 200;
        //position Y
        this._posY = 0;
        //the width of brick
        this._width = 150;
        //the height of brick
        this._height = 30;
        //brick velocity in the x
        this._brickVelocityX = 4;
    }

    //create getter for  posX 
    get posX(){
        return this._posX;
    }

    //create getter for posY
    get posY(){
        return this._posY;
    }

    //getter for width
    get width(){
        return this._width;
    }

    //getter for height
    get height(){
        return this._height;
    }

    //method used to move the brick left and right
    brickMove(){
        
        //move position X
        this._posX += this._brickVelocityX;
       
    }
    //show the brick when it is called
    showBrick(){
        fill('#edeffa')
        rect(this._posX, this._posY, this._width, this._height);
    }

}
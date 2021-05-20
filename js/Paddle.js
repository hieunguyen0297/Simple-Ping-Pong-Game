
//create paddle class
class Paddle{
    constructor(){
        //position x
        this._posX = 300;
        //position y
        this._posY = 577;
        //paddle width
        this._width = 150;
        //padding height
        this._height = 20;
    }

    //create getter for position x
    get posX(){
        return this._posX;
    }

    //getter for position Y
    get posY(){
        return this._posY;
    }

    //getter for the width
    get width(){
        return this._width;
    }

    //create getter for the height
    get height(){
        return this._height;
    }



    //this method is used to move the paddle to right 
    moveRight(){
        this._posX += 6;
        
    }
    //this method is used to move the paddle to left 
    moveLeft(){
        this._posX -= 6;
    }
    //show the paddle to screen when it is called
    showPaddle(){
        fill('#edeffa');
        stroke('black');
        rect(this._posX, this._posY, this._width, this._height);
    }
}

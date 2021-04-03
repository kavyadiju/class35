var ball;
var database;
var ballpos;
var ballref;
var position;

function setup()
{
    createCanvas(500,500);
    database=firebase.database();

    ball=createSprite(250,250,10,10);
    ball.shapeColor="red";

    ballref=database.ref('ball/position');
    ballref.on("value",readPosition,showError);
 
}
function draw()
{
    background("white");
    if(keyDown(LEFT_ARROW))
    {
     changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW))
    {
     changePosition(1,0);
    }
    else if(keyDown(UP_ARROW))
    {
     changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW))
    {
     changePosition(0,1);
    }
    drawSprites();
}


function changePosition(x,y)//x=-1, y=0 
{   
 database.ref('ball/position').set({
     'x':pos.x+x,
     'y':pos.y+y
 })

}

function readPosition(data){
    pos=data.val();
    ball.x=pos.x;
    ball.y=pos.y;
}

function showError()
{
    console.log("Error in reading from the data base")
}



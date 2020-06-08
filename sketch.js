var frect,mrect;
function setup() {
  createCanvas(800,400);
  frect=createSprite(200,250,50,80);
  mrect=createSprite(400,200,80,30);

  mrect.shapeColor=("orange");
  frect.shapeColor=("red");

mrect.debug=true;
frect.debug=true;

  mrect.velocityY=-5;
  frect.velocityY=5;
}

function draw() {
  background(0);
  
  if(mrect.x-frect.x<frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2){
      mrect.velocityX=mrect.velocityX*(-1);
      frect.velocityX=mrect.velocityX*(-1);
    } 
    if( mrect.y-frect.y<frect.height/2+mrect.height/2
      && frect.y-mrect.y<frect.height/2+mrect.height/2){
        mrect.velocityY=mrect.velocityY*(-1);
        frect.velocityY=mrect.velocityY*(-1);
      }
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

  /*if(mrect.x-frect.x<frect.width/2+mrect.width/2
    && frect.x-mrect.x<frect.width/2+mrect.width/2
    && mrect.y-frect.y<frect.height/2+mrect.height/2
    && frect.y-mrect.y<frect.height/2+mrect.height/2){
    mrect.shapeColor="pink";
    frect.shapeColor="pink";
  }
  else{
    mrect.shapeColor=("orange");
    frect.shapeColor=("red");
  }*/
  drawSprites();


}
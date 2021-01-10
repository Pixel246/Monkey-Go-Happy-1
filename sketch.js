

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var floor1,floor1img,invisifloor;

function preload(){
  
  
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  floor1img=
    loadImage("floor.png")

}



function setup() {
  createCanvas(600, 400);
  
  invisifloor=createSprite(100,400,500,100);

    floor1=createSprite(100,150,500,100);
  floor1.addImage(floor1img)
  floor1.scale=0.7
monkey=createSprite(100,310,200,200)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.15
  
  
}


function draw() {
  background(250);

var survivalTime=0; 

  stroke("white"); textSize(20); 
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 400,50);     
  
  floor1.velocityX  = -3
     


  if (floor1.x < 0){
      floor1.x = floor1.width/5;
      }
  
  
   
  
   if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -17;
    }
    
  
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  monkey.collide(invisifloor)
if (World.frameCount % 170 == 0) {
  obs();

}
  
  if (World.frameCount % 200 == 0) {
  bananas();

}
  drawSprites();

  stroke("white"); textSize(20); 
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 400,50);     

}






function obs(){
var obstacle = createSprite(630,330, 10, 10); 
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -5; obstacle.lifetime = 400; obstacle.scale = 0.2; 
}

function bananas(){
var banana= createSprite(630,200, 10, 10); 
  banana.addImage(bananaImage);
  banana.velocityX = -5; banana.lifetime = 400; banana.scale = 0.1; 
}
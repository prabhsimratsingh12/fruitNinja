 var swoard,swoardimage;

var monster,monster,monsterimage,monster2image,mg,mg2;

var fruitg,fruit2g,fruit2,fruit;

var fruitimage,fruit2image,fruit3image,fruit4image;

var gameover,gameoverimage;

var backboardimage,back;

var End=0;
var play=1;
var gamestate=play;

var score=0;

var swoardsound;

function preload(){
  
  monsterimage = loadAnimation("alien1.png","alien2.png");
   
  
  fruitimage = loadImage("fruit1.png");
  fruit2image = loadImage("fruit2.png");
  fruit3image = loadImage("fruit3.png");
  fruit4image = loadImage("fruit4.png");
  
  swoardimage = loadImage("sword.png");
 
  swoardsound = loadSound("knifeSwooshSound.mp3")
  
  gameoversound = loadSound("gameover.mp3")
  
  gameoverimage = loadImage("gameover.png")
  
}

function setup(){
  
  swoard = createSprite(200,300,20,20);
  swoard.addImage(swoardimage);
  swoard.scale = 0.3;
  //swoardsound.play();
  

  fruitg= new Group();
  fruit2g= new Group();
   mg= new Group();
  mg2= new Group();
  
}

function draw()
{
  
    
  background("lightblue");
  
  
      
  if(gamestate===play)
  {
    
      swoard.y=World.mouseY;
      swoard.x=World.mouseX;
      Monster();
      Fruit();
      if(swoard.isTouching(fruitg))
         {
      fruitg.destroyEach();
      score=score+1;
           swoardsound.play();
         }
    
    if(swoard.isTouching(fruit2g))
         {
      fruit2g.destroyEach();
      score=score+1;
           swoardsound.play();
         }



      if(swoard.isTouching(mg))
      {
        mg.destroyEach();
        fruitg.destroyEach();
        gamestate = End;
        gameoversound.play();
      }
    
    if(swoard.isTouching(mg2))
      {
        mg2.destroyEach();
        fruitg.destroyEach();
        gamestate = End;
         gameoversound.play();
      }

 Fruitc();
 Monsterc();

    
  }
  
 
  
  text("score "+score,200,30);
  
  if(gamestate === End)
  {
    swoard.addImage(gameoverimage);
    swoard.x=200;
    swoard.y=200;
    score=0;
    
  }
 
  

  drawSprites();
}

function Fruit() {
  if(frameCount%100===0){
  var fruit = createSprite(0,Math.round(random(20, 370)), 10, 10);
  var rand=Math.round(random(1,4));
  switch(rand)
  {
    case 1:fruit.addImage(fruitimage);
    break;
    case 2: fruit.addImage(fruit2image);
    break;
    case 3: fruit.addImage(fruit3image);
    break;
    case 4:fruit.addImage(fruit4image);
    break;
  }
                      
                      
                      
  fruit.velocityX = 15;
  fruit.lifetime = 150;
  fruit.scale = 0.1;
  fruitg.add(fruit)
  }
}

 function Monster(){
   if(frameCount%200===0){
  var monster = createSprite(0,Math.round(random(20, 370)), 10, 10 );
  monster.addAnimation("monster",monsterimage);
  monster.scale = 0.5;
  monster.velocityX = 15;
  monster.setLifetime = 150;
  mg.add(monster);
  return monster
   }
}

function Monsterc(){
   if(frameCount%200===0){
  var monster2 = createSprite(400,200,20,20)
  monster2.addAnimation("monster",monsterimage);
  monster2.scale = 0.5;
  monster2.y=Math.round(random(100, 300));
  monster2.velocityX=-(8+(score/10));
  monster2.setLifetime= 50;
  mg2.add(monster2);
  return monster2;
   }
}
 
function Fruitc() {
  if(frameCount%400===0){
  var fruit2 = createSprite(400,200,20,20);
  var rand=Math.round(random(1,4));
  switch(rand)
  {
    case 1:fruit2.addImage(fruitimage);
    break;
    case 2: fruit2.addImage(fruit2image);
    break;
    case 3: fruit2.addImage(fruit3image);
    break;
    case 4:fruit2.addImage(fruit4image);
    break;
  }
                      
                      
  fruit2.y=Math.round(random(100, 300));
  fruit2.velocityX=-(8+(score/10));           
  fruit2.lifetime = 150;
  fruit2.scale = 0.1;
  fruit2g.add(fruit2)
    return fruit2;
  }
}

  
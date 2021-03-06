var wall, thickness; 
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83); 

  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = color(80,80,80);

    speed = random(223,321);
    weight = random(30,52);
  bullet = createSprite(400,200,20,20);  
 
  bullet.velocityX = speed;
 
bullet.shapeColor = color("black");

}

function draw() {
  background(255,255,255); 
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor = rgb(255,0,0);
    }

    if(damage<10){
      wall.shapeColor = rgb(0,255,0);
    }

  }

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  lwallLeftEdge = lwall.x; 
  if(bulletRightEdge>=lwallLeftEdge){
    return true;
  }
  return false;
}





var bullet,wall;
var speed,weight;
var thickness;




function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50, 200, 70, 20);
 
 wall=createSprite(1500,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background("black");  
 
  
  wall.shapeColor=color(80,80,80);
  if(hasCollided(bullet,wall)) {
 bullet.velocityX=0;
 var damage =0.5 * weight * speed * speed/(thickness *thickness *thickness);
  if (damage>10)
 {
   wall.shapeColor=color(255,0,0)
 }
 
 if (damage<10) {
   wall.shapeColor=color(0,255,0);
 }
  }
  

  drawSprites();
}

function hasCollided(Lbullet,Lwall) {
bulletRightEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge) {
return true;
}
return false;


}
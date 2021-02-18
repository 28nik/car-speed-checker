var car, wall;
var speed, weight;

function setup() {
  createCanvas(1000,400);

  
  

  weight = random(400,1500)
  speed = random(55,90);

  car=createSprite(20,20,20,20);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall=createSprite(800, 200, 60, height);
}

function draw() {
  background(0);
  drawSprites();

  if (wall.x-car.x<(car.width-wall.width)/2) 
  {
    car.velocityX = 0;
  
  var deformation = (0.5*weight*speed*speed)/22500;
  if (deformation>180) {
    car.shapeColor = "red";
    car.x = width/2;
    car.y = height/2;
  }
  else if (deformation<180 && deformation>100) {
    car.shapeColor= "yellow";
    car.x = width/2;
    car.y = height/2;
  }
  else if(deformation<100){
    car.shapeColor = "green";
    car.x = width/2;
    car.y = height/2;
  }
}
}
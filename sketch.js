// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground; 

var ball;

function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options = {

    isStatic: true
  }
 
  ground = Bodies.rectangle(400,390,800,20,ground_options);
  World.add(myWorld,ground);

  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);
  
 var ball_options = {
   restitution: 1.2
 }

 ball = Bodies.rectangle(400,200,60,60,ball_options);
 World.add(myWorld,ball);

}

function draw() {
  background(0); 
  Engine.update(myEngine);
  rectMode(CENTER);

  rect(ground.position.x, ground.position.y, 800, 20);  

ellipse(ball.position.x,ball.position.y,60,60);
}
/*

Matter.js

3 object

1. Matter.Engine : this is used to create physics engine 
2. Matter.World : this is used to create the physics world
3. Matter.Bodies : this is used to create objects

*/
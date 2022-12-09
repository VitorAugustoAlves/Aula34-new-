const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var botao1;
var botao2;
var ball;
var shelf, shelf2, shelf3, shelf4;
var win

function setup() {
  createCanvas(500, 400);
  engine = Engine.create();
  world = engine.world;

  shelf = new Ground(400, 330, 20, 100);
  shelf2 = new Ground(300, 330, 20, 100);
  shelf3 = new Ground(100, 100, 100, 20);
  shelf4 = new Ground(400, 100, 100, 20);
  ground = new Ground(200, 390, 560, 20);
  right = new Ground(490, 200, 20, 400);
  left = new Ground(10, 200, 20, 400);
  top_wall = new Ground(200, 10, 560, 20);


  botao1 = createImg("up.png");
  botao1.position(150, 100);
  botao1.size(35, 35);
  botao1.mouseClicked(upForce);

  botao2 = createImg("right.png");
  botao2.position(250, 100);
  botao2.size(35, 35);
  botao2.mouseClicked(rightForce);
  var options = {
    restitution: 1,
    friction: 10,
    density: 3,
  };
  ball = Bodies.circle(200, 200, 30);
  World.add(world, ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);

win = createSprite(300, 400, 100, 10)
win.visible = true;
win.shapeColor = "red"


}
function draw() {
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  shelf.show();
  shelf2.show();
  shelf3.show();
  shelf4.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 30);
  drawSprites();
if (ball.isTouching(win)){
  ball.remove;
  text("Parabens", 250, 200);
}
}

function upForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}

function rightForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: 0 });
}

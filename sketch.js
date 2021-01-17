const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box, box8, box9, box10, box11, box12, box13, box14, box15
var ground, rope, ball

function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
  world = engine.world;

ground = new Ground(650, 670, 1300, 10)

box1 = new Box(600, 100)
box2 = new Box(600, 100)
box3 = new Box(600, 100)
box4 = new Box(600, 100)
box5 = new Box(600, 100)
box6 = new Box(700, 100)
box7 = new Box(700, 100)
box8 = new Box(700, 100)
box9 = new Box(700, 100)
box10 = new Box(700, 100)
box11 = new Box(800, 100)
box12 = new Box(800, 100)
box13 = new Box(800, 100)
box14 = new Box(800, 100)
box15 = new Box(800, 100)

ball = new Ball(300, 500, 70)
rope = new Rope(ball.body, {x:300, y:50})

}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()

  ground.display()

  ball.display()

  rope.display()
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}

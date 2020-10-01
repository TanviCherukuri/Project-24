var edge1,edge2,edge3,line,dustbin1,dustbin2,dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,350, 5);

	dustbin1 = new Dustbin(650,325,10,50);
	dustbin2 = new Dustbin(625,345,50,10);
	dustbin3 = new Dustbin(600,325,10,50);

	ground = new Ground(400,350,800,5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


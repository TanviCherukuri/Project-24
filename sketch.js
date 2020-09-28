class Paper {
	constructor(x,y,radius) {
		var options = {
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}
		Matter.Bodies.circle(x, y, radius, options);
	}
	display() {

	}
}

var edge1,edge2,edge3,line;

class Dustbin {
	constructor() {
		edge2 = createSprite(width-200,height-350,100,20);
		edge2.shapeColor= color(255,255,255);
	
		edge1 = createSprite(width-250,height-375,20,75);
		edge1.shapeColor= color(255,255,255);
	
		edge3 = createSprite(width-150,height-375,20,75);
		edge3.shapeColor= color(255,255,255);
	}
	display() {

	}
}

class Ground {
	constructor() {
		line = createSprite(400,375,800,20);
		line.setStatic = true;
		line.shapecolor = color(255,50,100);
	}
	display() {

	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50, 350, 20);

	dustbin = new Dustbin();

	ground = new Ground()


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  dustbin.display();

  ground.display();

  drawSprites();
 
}




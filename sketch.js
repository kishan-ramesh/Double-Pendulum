const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


var ball1; ball2 ;ball3 ;ball4 ;ball5;
var con;
var con2;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options  = {
		restitution:1.0,
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	ball1 = Bodies.circle(400,300,20,ball_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(520,300,20,ball_options);
	World.add(world,ball2);

	con = Matter.Constraint.create({
		pointA:{x:400,y:300},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1,
	});

	con2 = Matter.Constraint.create({
		pointA:{x:520,y:400},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1,
	});

	World.add(world,con2);

	World.add(world,con);

	
  
	Engine.run(engine);


	
}

function draw() {
	rectMode(CENTER);
  
	ellipseMode(RADIUS);
  background("#99004d");

  ellipse(ball2.position.x,ball2.position.y,20);

  rect(roof.position.x,roof.position.y,230,20);
ellipse(ball1.position.x,ball1.position.y,20);


line(roof.position.x,roof.position.y,ball1.position.x,ball1.position.y);
line(roof.position.x,roof.position.y,ball2.position.x,ball2.position.y);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

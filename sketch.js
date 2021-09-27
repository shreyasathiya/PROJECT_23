const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var roof;

//Create multiple bobs, mulitple ropes varibale here
var ball1, ball_options1;
var ball2, ball_options2;
var ball3, ball_options3;
var ball4, ball_options4;
var ball5, ball_options6;
var ball6, ball_options5;
var cons1, cons2, cons3, cons4, cons5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	
	var ball_options1 = {
		restitution: 0.95,
	  }

	  var ball_options2 = {
		restitution: 0.95,
	  }

	  var ball_options3 = {
		restitution: 0.95,
	  }

	  var ball_options4 = {
		restitution: 0.95,
	  }

	  var ball_options5 = {
		restitution: 0.95,
	  }

	  ball1 = Bodies.circle(100,200,20,ball_options1);
      World.add(world,ball1);

	  ball2 = Bodies.circle(100,300,20,ball_options2);
      World.add(world,ball2);

	  ball3 = Bodies.circle(100,400,20,ball_options3);
      World.add(world,ball3);

	  ball4 = Bodies.circle(100,500,20,ball_options4);
      World.add(world,ball4);

	  ball5 = Bodies.circle(100,600,20,ball_options5);
      World.add(world,ball1);

	    cons1 = Matter.Constraint.create({  
		     pointA:{x:200,y:20},
		     bodyB:ball1,   
		     pointB:{x:0,y:0},    
		     length:100,     
		     stiffness:0.1 });
		     World.add(world,cons1);
		
		cons2 = Matter.Constraint.create({  
			pointA:{x:300,y:20},
			 bodyB:ball2,   
			pointB:{x:0,y:0},    
			length:100,     
			stiffness:0.1 });
			World.add(world,cons2);


		
			cons3 = Matter.Constraint.create({  
				pointA:{x:400,y:20},
				 bodyB:ball3,   
				pointB:{x:0,y:0},    
				length:100,     
				stiffness:0.1 });
				World.add(world,cons3);
			
				cons4 = Matter.Constraint.create({  
					pointA:{x:400,y:20},
					 bodyB:ball4,   
					pointB:{x:0,y:0},    
					length:100,     
					stiffness:0.1 });
					World.add(world,cons4);
				
					cons5 = Matter.Constraint.create({  
						pointA:{x:500,y:20},
						 bodyB:ball5,   
						pointB:{x:0,y:0},    
						length:100,     
						stiffness:0.1 });
						World.add(world,cons5);
						

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

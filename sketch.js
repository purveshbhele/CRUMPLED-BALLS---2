
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;
    

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	boxleft= new Box(495,350,10,80);
	
	boxm= new Box(660,385,320,10,{isStatic:true} );
	
	boxright= new Box(820,350,10,80);
	
	ball = new Ball(200,100,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  ground.display();
  ball.display();
  boxleft.display();
  boxm.display();
  boxright.display();
  

 drawSprites();
 
}
function keyPressed() {
if(keyCode===UP_ARROW){
 Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y: -30});
}

}





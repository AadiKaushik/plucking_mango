
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	boyimage = loadImage("Plucking+mangoes/image/boy.png")
}

function setup() {
	createCanvas(3500, 2000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground (1750,1980,3500,50)
boy1= new boy (500,1740,600,900)
tree1 = new tree (2800,1250,1500,1500) 
stone1= new stone(200,1350,200,200)

sling1= new SlingShot(stone1,{x:20,y:20})

	Engine.run(engine);

	
}


function draw() {


  
	background(0);
  stone1.display()
	boy1.display();
  ground1.display();
tree1.display();
  drawSprites();


}




function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}
    

function mouseReleased(){
    sling1.fly();
}

function keyPressed()
{
if(keyCode===32)
{
    sling1.attach(stone1.body);
}
}
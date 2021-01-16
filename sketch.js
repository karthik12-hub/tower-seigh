const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body =Matter.Body;
const Constraint=Matter.Constraint
                        

var engine, world;
var gound;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,ball,chain

function preload(){

}

function setup(){
 engine = Engine.create();
 world = engine.world;
 createCanvas(1000,700);
 ground = new Ground(500,650,1000,30);
 b1=new Block(700,400,50,50)
 b2=new Block(750,400,50,50)
 b3=new Block(800,400,50,50)
 b4=new Block(850,400,50,50)
 b5=new Block(900,400,50,50)
 b6=new Block(750,450,50,50)
 b7=new Block(800,450,50,50)
 b8=new Block(850,450,50,50)
 b9=new Block(800,500,50,50)
 ball=new Ball(300,300,100,100)
 chain=new Chain(ball.body,{x:400,y:400})
 Engine.run(engine)
}

function draw(){
    background(180);
 Engine.update(engine);
 ground.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 ball.display();
 chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly();
}
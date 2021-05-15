const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;

var slingshot,log6;

var gameState = "onSling";

var score=0;

var bg;

function preload(){
    getTime();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform=new Ground(150,300,300,190);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    slingshot= new Slingshot(bird.body,{x:200,y:50})

}

function draw(){
    if (bg){
      background(bg);      
    }
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display(); 

    slingshot.display()

    stroke('blue')
    strokeWeight(2);
    text("SCORE:"+score ,800,50)

    pig1.score();

    pig3.score();

    platform.display();
}
function mouseDragged(){
    if (gameState !== "launched"){
     Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})       
    }
}
function mouseReleased(){
    slingshot.fly()
    gameState = "launched";
}
function keyPressed(){
    if (keyCode===32){
        gameState = "onSling";
        bird.tragectory=[];
     Matter.Body.setPosition(bird.body,{x:200,y:50})       
        slingshot.attach(bird.body)
    }
}
async function getTime(){
    var responce=await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles")
    var rJSON=await responce.json()
    var dateTime= rJSON.datetime;
    console.log(dateTime);
    var r= dateTime.slice(11,13);
    console.log(r);
    if (r>=06&&r<=18){
        bg=loadImage("sprites/bg.png");
    }else{
        bg2=loadImage("sprites/bg2.jpg")
    }
}
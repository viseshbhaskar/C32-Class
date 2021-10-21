const Engine = Matter.Engine;

const World = Matter.World; 

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var myWorld, myEngine;
var ground;
var ball;
var bird;
var box1,box2, box3, box4,box5, pig1, pig2, log1,log2, log3, log4, log5;
var bg = "sprites/bg.png"
var backgroundImg;
var platform;
var sling;
var score = 0
var gameState = "onSling"
var a, b, c, d, e, f;

function preload() {
  getTime();
}

function setup() {
  createCanvas(1200,400);

  a = "Hello, world! I am the most advanced abandoned computer ever from Yuma, AZ!"

  b = 14;

d = null;

e = [1, 2, 3, 4, 5];

f = [["Begin","Next 11 miles"], ["Variable", "Speed limit corridor"]]

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(e.length);
console.log(e[1]);
console.log(f);
console.log(f[0][1]);
console.log(f[1][0]);

  //This creates the electronic engine of a car
  myEngine = Engine.create();

  //This is the world of the engine, it has to be dry and hot
  myWorld = myEngine.world;

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150,305,300,170);

  

  bird = new Bird(200,50);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);


  log1 = new Log(810,260,300,PI/2);
  log2 = new Log(810,180,300,PI/2);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);
  //log5 = new Log(200,100,150,PI/2);

  pig1 = new Pig(810,350,50,50);
  pig2 = new Pig(810,220,50,50);

  sling = new Slingshot(bird.body,{x:200,y:100});
  
 
 
}

function draw() {
  if(backgroundImg)
  background(backgroundImg)  

  text("Score: " + score, 1100, 70)
  
  Engine.update(myEngine);
  ground.display();
  platform.display();
  bird.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig1.score();
  pig2.score();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  //log5.display();
  sling.display();
  
 // console.log(box2.body.angle)


}
function mouseDragged() {
  if(gameState === "onSling")
  {

  
      Matter.Body.setPosition(bird.body, {x:mouseX,y:mouseY});
  }  
}
function mouseReleased() {
  sling.fly();
  gameState = "Launched"
}
function keyPressed() {
  if (keyCode === 32) {
    //sling.attach(bird.body)
  } 
}


//userdefined function 
async function getTime() 
{ //endpoint
   var response = await fetch("https://worldtimeapi.org/api/timezone/America/Phoenix");
    var responseType = await response.json(); 
   
      console.log(responseType);
      var dt = responseType.datetime;
      console.log(dt);
      var hr = dt.slice(11, 13);
      console.log(hr);

      if(hr>=06 &&  hr<=15)

      {
         bg = "sprites/bg.png"
      }

      else
      {
         bg = "sprites/bg.png"
      }

      backgroundImg = loadImage(bg)
      
   // console.log(responseType); 


    }
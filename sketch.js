var trex;
var trex_running;


function preload(){
  //load sounds, animations,images
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");


}

function setup(){
  createCanvas(600,200);

  //creating trex
  trex=createSprite(50,160,20,40);
  //sprite.addAnimation("label",name of var in which the ani is loaded)
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;


}

function draw(){
  background(256);


  drawSprites();
}
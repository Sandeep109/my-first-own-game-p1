var form, game,player
var gameState = 0
var B1,B2,B3
var out,healthBar1,healthBar2,healthBar3,healthBar4,healthBar5;

function preload() {
B1 = loadImage("B1.jpg");
B2 = loadImage("B2.jpg");
B3 = loadImage("bg.jpg")
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  game = new Game();
  game.reg()



}

function draw() {
  //trex.debug = true;
  background(255);
if(gameState === 0){
  background(B1)
}
else if (gameState === 1){
  background(B2)
}
else{

  background(B3)
  
  game.start();
}
drawSprites()





}


var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var obst , obst_Img , obst_Group;

var yval = 0;
var xval = 0;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  obst_Img = loadImage("images/f1.png");

}

function setup(){
  
  canvas = createCanvas(displayWidth , displayHeight);
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  obst_Group = new Group();

for(i = 0 ; i<5; i++){

    var obstX = random(200,1000);
    var obstY = random(-displayHeight*4,displayHeight-250);

      obst = createSprite(obstX,obstY);
      obst.addImage(obst_Img);
      obst_Group.add(obst);
  
}

}



function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}



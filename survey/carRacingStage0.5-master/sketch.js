
var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
//var drawing=[];
var voterAnswer=0;
//var voterAnswer2=[];

var form, player, game;
var allPlayers;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  this.yes=createButton('yes');
  this.no=createButton('no');
  this.september=createButton('Till september 2020');
  this.december=createButton('Till december 2020');
  this.decade=createButton('Till 2030');
  this.never=createButton('Never');
}


function draw(){
  background(220);
  //console.log(voterAnswer);
  if(playerCount===1){
  game.update(1);
}

if(gameState===1){
clear();
this.yes.position(30,60);
this.no.position(30,120);
this.september.position(30,250);
this.december.position(30,300);
this.decade.position(30,350);
this.never.position(30,400);
game.play();
textSize(20);
text("Should lockdown be extended more than 17 May?",20,20);
   //t1=(20,40,10,10,ground_options);
   this.yes.mousePressed(()=>{
  
    this.yes.hide();
    //voterAnswer=voterAnswer+1;
   this.no.hide();
    game.updateYes(1);
    //voterAnswer.display();
    text(database.yes,20,50);
  })  

  this.no.mousePressed(()=>{
  
    this.yes.hide();
    this.no.hide();
    //voterAnswer=voterAnswer+1;
   
    game.updateNo(1);
    //voterAnswer.display();
  })  

  text("Till when will be find corona virus vaccine?",30,200);
  this.september.mousePressed(()=>{
    this.september.hide();
    this.december.hide();
    this.decade.hide();
    this.never.hide();
    game.updateSeptember(1);
  })
  this.december.mousePressed(()=>{
    this.september.hide();
    this.december.hide();
    this.decade.hide();
    this.never.hide();
    game.updateDecember(1);
  })
  this.decade.mousePressed(()=>{
    this.september.hide();
    this.december.hide();
    this.decade.hide();
    this.never.hide();
    game.updateDecade(1);
  })
   this.never.mousePressed(()=>{
    this.september.hide();
    this.december.hide();
    this.decade.hide();
    this.never.hide();
    game.updateNever(1);
  })
}


}
function hide(){
  this.yes.hide();
  this.no.hide();
  this.september.hide();
  this.december.hide();
  this.decade.hide();
  this.never.hide();
}

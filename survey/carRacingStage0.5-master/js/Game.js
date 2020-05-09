class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  updateYes(state){
    database.ref('/').update({
      yes: state
    });
  }

  updateNo(state){
    database.ref('/').update({
      no: state
    });
  }
  updateSeptember(state){
    database.ref('/').update({
      votesForSeptember: state
    });
  }
  updateDecember(state){
    database.ref('/').update({
      votesForDecember: state
    });
  }
  updateDecade(state){
    database.ref('/').update({
      votesFor2030: state
    });
  }
  updateNever(state){
    database.ref('/').update({
      votesForNever: state
    });
  }
 async start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
    
      form = new Form()
      form.display();

    }
  
  }
play(){
  form.hide();
  //textSize(30);
  //text("Game Start",20,20);
  Player.getPlayerInfo();
  if(allPlayers!==undefined){
  //var dp=130;
  var index=0;
  var x=0;
  var y=0;

  for(var plr in allPlayers){
    index++;
    x=x+200;
    y=displayHeight-allPlayers[plr].distance;

    if(index===player.index){
     
    }
    
  }
}

}
}
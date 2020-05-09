class Form {
  constructor() {
    this.input = createInput("Name");
    this.input1 = createInput("Email id");
    
    this.button = createButton('Play');
      this.greeting = createElement('h3');
        
  
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input1.hide();
  }

  display(){

   
    this.input.position(displayWidth/2-50, displayHeight/2-80);
    this.input1.position(displayWidth/2-50, displayHeight/2-20);

    this.button.position(displayWidth/2+30, displayHeight/2);

    this.button.mousePressed(()=>{
//background(0);
      this.input.hide();
      this.input1.hide();
      this.button.hide();

      player.name = this.input.value();
      player.emailId=this.input1.value();
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-70, displayHeight/4)

    });

  }
}

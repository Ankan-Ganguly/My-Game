class Form1 {
    constructor(){
        this.input = createInput("").attribute("placeholder", "Name");
        this.sherlock = createButton("Sherlock Holmes");
        this.moriarty = createButton("James Moriarty");
        this.button = createButton("Continue");
        this.greetings = createElement("h2");
        this.title = createElement("h1");
        this.option = createElement("h2");
        //this.character = 0;
    }
    hide(){
        this.input.hide();
        this.sherlock.hide();
        this.moriarty.hide();
        this.option.hide();
        this.title.hide();
        this.button.hide();
        this.greetings.hide();
    }
    display(){
        this.title.html("The Sherlock Holmes Game");
        this.title.position(displayWidth/2-120, 0);
        this.title.style("color", "blue");

        this.option.html("What Do You Choose To Be");
        this.option.position(displayWidth/2-55, displayHeight/2 - 30);
        this.option.style("color", "maroon");

        this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
        this.input.style("background", "pink");
        this.sherlock.position(displayWidth/4-30, displayHeight/2-100);
        this.sherlock.style("width", "200px");
        this.sherlock.style("height","40px");
        this.sherlock.style("background","green");
        this.moriarty.position(displayWidth-270, displayHeight/2-100);
        this.moriarty.style("width", "200px");
        this.moriarty.style("height", "40px");
        this.moriarty.style("background", "red");
        this.button.position(displayWidth/2-40, displayHeight-200);
        this.button.style("width", "300px");
        this.button.style("height", "40px");
        this.button.style("background", "yellow");

        this.sherlock.mousePressed(()=>{
            this.sherlock.hide();
            this.moriarty.hide();
            character = 1;
        })
        this.moriarty.mousePressed(() => {
            this.moriarty.hide();
            this.sherlock.hide();
            character = 2
        })
        this.button.mousePressed(()=>{
            this.option.hide();
            this.title.hide();
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            if (character === 1){
                this.greetings.html("Hi "+player.name + " Holmes");
                this.greetings.position(displayWidth/2-30, displayHeight/2-40);
                this.greetings.style("font-size", "50px");
                this.greetings.style("font-color", "white");
            }
            if (character === 2) {
                this.greetings.html("Hi " + player.name + " Moriarty");
                this.greetings.position(displayWidth / 2 - 30, displayHeight / 2 - 40);
                this.greetings.style("font-size", "50px");
                this.greetings.style("font-color", "white");
            }
        })
    }


}
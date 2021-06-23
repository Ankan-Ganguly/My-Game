class Ready{
    constructor(){
        this.accept = createButton("I will very happily look into the case");
        this.reject = createButton("I fear that this case is not in my hands");
        this.continue = createButton("continue")
    }
    display(){
        if(character ===1){
        this.accept.position(displayWidth/2 -30, displayHeight-300);
        this.accept.style("width", "100px");
        this.accept.style("height", "20px");
        this.accept.style("color","green");

        this.reject.position(displayWidth/2 + 100, displayHeight - 300);
        this.reject.style("width", "100px");
        this.reject.style("height", "20px");
        this.reject.style("color", "red");

        this.accept.mousePressed(()=>{
            this.accept.hide();
            this.reject.hide();
            game.update(1);
        })
        this.reject.mousePressed(()=>{
            this.reject.hide();
            this.accept.hide();
            this.continue.hide();
            game.update(3) ;
        })
        }

        if (character === 2){
            this.continue.positon(dosplayWidth/2+200, displayHeight-300);
            this.continue.style("width","50px");
            this.continue.style("height","2opx");
            this.continue.style("color","blue");

            this.continue.mousePressed(()=>{
                this.continue.hide();
                game.update(1);
            });
            //what will happen here if detective rejects?
        }
    }
}
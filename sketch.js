var database;
var gameState = 0;
var playerCount;
var game, form,player;
var character=0;
var score = 0;

function preload(){
    openingBgImg = loadImage("../images/Opening_BG.jpg");
    
    gameOpeningS = loadSound("../sound/Sherlock_Theme.mp3");
    CaseOpeningS = loadSound("../sound/sherlock_holmes_them.mp3");
    moriartyWinS = loadSound("../sound/did_you_miss_me.mp3");
    sherlockWinS = loadSound("../sound/absurdly_simple.mp3");
    moriartyLoseS = loadSound("../sound/Moriarty_Lost.mp3");
    sherlockLoseS = loadSound("../sound/Sherlock_Lost.mp3");
}

function setup(){
    createCanvas(displayWidth- 20, displayHeight-30);
    database = firebase.database();
    //form = new Form1();
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
    background(openingBgImg);
    //form.display();
    if(playerCount===2){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.case1();
    }
}
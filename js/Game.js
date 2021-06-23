class Game{
    constructor(){}

    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form1()
            form.display();
            background(openingBgImg);
        }
    }

    case1() {
        form.hide();
        Player.getPlayerInfo();

        if (character === 1) {
            fill('blue');
            textSize(18);
            text("Lestrade has suddenly come to your residence very early today. He knocks on you a case in which he thinks he might want your help. It is like this: ", 100, displayHeight / 3);
            text("Roger Brown, a History Professor of Oxford University is found dead early morning. He had returned to his place very late last night, probably after 12", 100, displayHeight / 3 + 20);
            text("because his maid had gone to bed at 12 and he hadn't returned till then. When she went to his room for tea at 7 o' clock as usual, she saw him sitting", 100, displayHeight / 3 + 40);
            text("on his reading table with his head on the table. She thought initially that he has slept there while reading which has occured often. But on going near,", 100, displayHeight / 3 + 60);
            text("she saw that his head was smashed hardly by an archeological relic which was on the table and he has profusely bled. There was also a note on his hand", 100, displayHeight / 3 + 80);
            text("which reads 'I have earned my mon' with a pen found in his hand. She was horified at first and called a relative of the deceased living nearby who in turn", 100, displayHeight / 3 + 100);
            text("called the police. The police has checked such that nothing of the room is touched or moved. The casegrows remarkable when it was known that the man's elder", 100, displayHeight / 3 + 120);
            text("brother Peter has been living in the house for quite some time and he himself had taken the the responsibilityto open the door to his brother last night and", 100, displayHeight / 3 + 140);
            text("retired the maid. He is not found from today morning in anywhere within the house which is new.No sign of of struggle has been found in any part of the room.", 100, displayHeight / 3 + 160);
            text("The police is after this lost brother. So, what do you make of it, Holmes?'", 100, displayHeight / 3 + 180)
            //fill('red');
            //text("Are you ready to handle the case?", displayWidth / 2 - 30, displayHeight - 600);
            if (character === 2) {
                fill('blue');
                textSize(18);
                //fill('red');
                //text("Press 'continue' to accomplish the mission", displayWidth / 2 - 30, displayHeight - 600);
            }
        }
        //ready2 = new Ready();
        //ready2.display();
        if(keyIsDown("space")){
            game.update(2);
        }
    }

    play1(){

    }

    case2() {
        play1.hide();
        Player.getPlayerInfo();

        if (character === 1) {
            textSize(18);
            fill('blue');
            text("'New Zealand is reported to be completely free from this deadly virus corona earlier this year. But suddenly it is increasing there rapidly again. The source is", 100, displayHeight / 3);
            text("found to be a 70 years old man who hasn't left his house for the last 2 years because he is suffering osteoporosis inlegs. He buys his daily commodities through a", 100, displayHeight / 3 + 20);
            text("young man living next doors. In the lockdown period he used to keep all the stuff the old man asked for in the door-step. The old-man is a bachelor and have", 100, displayHeight / 3 + 40);
            text("no near relative. But it is reported that an unknown man is suddenly seen coming to his house a week back who claims to be his nephew just returned from South America.", 100, displayHeight / 3 + 60);
            text("This man has been tested negative for COVID and is completely out of suspect from the police. Both the old man and his helper is dead due to this disease.", 100, displayHeight / 3 + 60);
            text("We are completely out of our mind about the case and is looking forward to you very much. Hope you will not put us down in our time of misery. Thanking you,", 100, displayHeight / 3 + 80);
            text("Minister of Health, Andrew James Little.' This is the letter sent to you from the Health Minister of New Zealand. It is written in fullscape paper with the ", 100, displayHeight / 3 + 100);
            text("seal of the office of PM of New Zealand. It is posted in thenearby post-office of the Parliamentary House of the country. This is all that can be deduced with ", 100, displayHeight / 3 + 120);
            text("other small facts irrelevant to the case. Now, its totally up to you.", 100, displayHeight / 3 + 140);
            fill('red');
            text("Are you ready to handle the case?", displayWidth / 2 - 30, displayHeight - 600);
        }
        if(character === 2){
            textSize(18);
            fill('blue');
            text("");
        }
    }

    case3() {
        play2.hide();
        Player.getPlayerInfo();

        if (character === 1) {
            fill('blue');
            text("Though the field is not of your interest, the manager of Denmark's national football team, Kasper Hjulmand, has come for your", 100, displayHeight / 3);
            text("assisstance in a very poor condition. In their match against Finland, the best Danish striker Christian Eriksen had went to coma", 100, displayHeight / 3 + 20);
            text("for a sudden cardiac arrest. Though the doctors have already ensured that it is completely responsible for his bad luck, he knowing", 100, displayHeight / 3 + 40);
            text("Eriksen personally has full believe that it is completely unnatural to occur with a man as fit as Eriksen. He is feeling flat about the ", 100, displayHeight / 3 + 60);
            text("what the matter is. None believes Kasper over the matter. He is so suspicious only for a single matter - Eriksen got a phone call just before", 100, displayHeight / 3 + 80);
            text("the match in which he was talking very angrily. He can't even ask Eriksen of something he is not supposed to hear. That's why he has come to you", 100, displayHeight / 3 + 100);
            text("for the very truth of the matter and he is very curious for it.", 100, displayHeight / 3 + 120);
            fill('red');
            text("Are you ready to handle the case?", displayWidth / 2 - 30, displayHeight - 600);
        }

        if (character === 2) {
            fill('blue');
            text("You have been a famed mischief for quite some time now. In the second day of the Euro 2020, you have participated in a betting against", 100, displayHeight / 3);
            text("the whole fan base of football by betting that Finland will defeat Denmark. Though you knew from the very beginning that it isn't going", 100, displayHeight / 3 + 20);
            text("to happen so. Henece, you declined into making the impossible possible. For this, you made a deep and profound study of harmful medicines", 100, displayHeight / 3 + 40);
            text("in a very short time. You have also executed your superb plan to drug the most famous player of Denmark, Christian Eriksen and have created", 100, displayHeight / 3 + 60);
            text("a false situation that would completely remove the traces of it after quite sometime. You have also gained much from the beting. All was well", 100, displayHeight / 3 + 80);
            text("till you got the news of Holmes interfering in this matter also. So, be ready for every posibillity of being caught and take all the precuationary meausures possible.", 100, displayHeight / 3 + 100);
            fill('red');
            text("Press 'continue' to accomplish the mission", displayWidth / 2 - 30, displayHeight - 600);
        }
        //ready2 = new Ready();
        //ready2.display();
    }

    case4(){
        play3.hide();
        Player.getPlayerInfo();
        
        if (character ===1){
            //textSize(18);
            fill('blue')
            text("In this grave situation of pandemic, Holmes was paid a visit by two of England's greatest state generals.", 100, displayHeight/3);
            text("They said that the Britsh PM Boris Johnson is threatened to be kidnapped and the minister fears that it is",100,displayHeight/3+20);
            text("going to happen in his birthday. He has already taken safety measures of completely hiding the birthday party",100,displayHeight/3+40);
            text("from the public. But still, he is feaarful of what gonna happen. He can't even rely on the Scotland Yard as", 100, displayHeight/3+60);
            text("their presence will also attract the public as well as media towards the matter. So, he asked for your help", 100, displayHeight/3+80);
            text("since you have an undying fame of being the greatest detective in all Europe. As always, this case is strictly", 100, displatHeight/3+100);
            text("regarded as a national security and you are entirely forbidden to utter a single word about this case to anyone at all.", 100, displayHeight/3+120);
            textSize(19);
            fill('red');
            text("Are you ready to handle the case?", displayWidth/2-30, displayHeight-600);
        }
        if (character ===2){
            fill('blue');
            text("You have already built up a successful plan of kidnapping the British PM Boris Johnson and it is perfectly working", 100, displayHeight/3);
            text("so far. Your subordinates have already sent a threatening note to the person in question two days earlier in your word.", 100, displayHeight/3+20);
            text("Now, you have planned to play the last move in his birthday party. But, news has come to you by one of your men that", 100, displayHeight/3+40);
            text("your arch rival, Sherlock Holmes is appointed for this case. This adds to your mastermind another new difficulty. But", 100, displayHeight/3+60);
            text("still you are hopeful of sticking to your plan in this case. But again, you have to add a new precautionary measure to it.", 100, displayHeight/3+80);
            fill('red');
            text("Press 'continue' to accomplish the mission", displayWidth/2-30, displayHeight-600)
        }
        //ready1 = new Ready();
        //ready1.display();
    }

    sherlock = createSprite(70, displayHeight - 100);
    moriarty = createSprite(70, displayHeight - 100);

}
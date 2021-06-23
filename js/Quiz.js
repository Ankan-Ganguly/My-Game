class Quiz {
    constructor(){
        this.sButton1 = createButton("Check");
        this.sButton2 = createButton("Check");
        this.sButton3 = createButton("Check");
        this.sButton4 = createButton("Check");

        this.mButton1 = createButton("Check");
        this.mButton2 = createButton("Check");
        this.mButton3 = createButton("Check");
        this.mButton4 = createButton("Check");

        this.sInput1 = createInput("").attribute("placeholder", "Please Don't Google");
        this.sInput2 = createInput("").attribute("placeholder", "Please Don't Google");
        this.sInput3 = createInput("").attribute("placeholder", "Please Don't Google");
        this.sInput4 = createInput("").attribute("placeholder", "Please Don't Google");

        this.mInput1 = createInput("").attribute("placeholder", "Please Don't Google");
        this.mInput2 = createInput("").attribute("placeholder", "Please Don't Google");
        this.mInput2 = createInput("").attribute("placeholder", "Please Don't Google");
        this.mInput4 = createInput("").attribute("placeholder", "Please Don't Google");
    }

    display(){
        if (character === 1){
            this.sInput1.position(100, 90);
            this.sButton1.position(100, 120);

            this.sInput2.position(700, 190);
            this.sButton2.position(700, 220);

            this.sInput3.position(100, 290);
            this.sButton3.position(100, 320);

            this.sInput4.position(700, 290);
            this.sButton4.position(700, 320);
            if (gameState === 3){
                this.sButton1.mousePressed(()=>{
                    if (system.authenticate(accessCode1, this.sInput1.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton2.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput2.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton3.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput3.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton4.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput4.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
            }
            if (gameState === 6) {
                this.sButton1.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput1.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton2.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput2.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton3.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput3.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton4.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput4.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
            }
            if (gameState === 9) {
                this.sButton1.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput1.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton2.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput2.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton3.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput3.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton4.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput4.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
            }
            if (gameState === 12) {
                this.sButton1.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput1.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton2.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput2.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton3.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput3.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
                this.sButton4.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.sInput4.value())) {
                        this.sButton1.hide();
                        this.sInput1.hide();
                        score++;
                    }
                });
            }
        }
        if (character === 2) {
            this.mInput1.position(100, 90);
            this.mButton1.position(100, 120);

            this.mInput2.position(700, 190);
            this.mButton2.position(700, 220);

            this.mInput3.position(100, 290);
            this.mButton3.position(100, 320);

            this.mInput4.position(700, 290);
            this.mButton4.position(700, 320);
            if (gameState === 3) {
                this.mButton1.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput1.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton2.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput2.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton3.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput3.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton4.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput4.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
            }
            if (gameState === 6) {
                this.mButton1.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput1.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton2.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput2.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton3.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput3.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton4.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput4.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
            }
            if (gameState === 9) {
                this.mButton1.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput1.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton2.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput2.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton3.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput3.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton4.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput4.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
            }
            if (gameState === 12) {;

                this.mButton1.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput1.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton2.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput2.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton3.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput3.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
                this.mButton4.mousePressed(() => {
                    if (system.authenticate(accessCode1, this.mInput4.value())) {
                        this.mButton1.hide();
                        this.mInput1.hide();
                        score++;
                    }
                });
            }
        }
    }
}
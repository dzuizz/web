// Ping Pong Variables
let ballX = 0, ballY = 0, score = 0, lives = 5, addX = 4, addY = 4, gameStarted = false;

function setup() {
    let canvas = createCanvas(1440, screen.height);
    canvas.parent('sketch-holder');
    
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    colorMode(RGB);

    ballX = width/2;
    ballY = height/2;
}

function draw() {
    background('black');

    // TODO: Ping Pong
    if (gameStarted) {
        if (lives > 0) { // TODO: Still alive
            if (score >= 25) { // TODO: Win
                fill(0, 255, 0); //* Green
                stroke(0, 255, 0); //* Green
                textSize(80);
                text("YOU WON!", width/2, height/2);
            } else { // TODO: Still playing
                //! Text
                fill(47, 47, 47);
                stroke(47, 47, 47);
                textSize(80);
                
                text("Lives: " + lives, width/2, 600); //! Lives
                text("Score: " + score, width/2, 200); //! Score

                textSize(40);
                text("Score 25 points to win", width/2, 400);

                stroke('black');

                //! Ball
                fill(255, 0, 0);
                circle(ballX, ballY, 40);
                
                //! Player
                fill(0, 255, 0);
                rect(225/2, mouseY, 22, 110);
                
                //! Opponent
                fill(0, 0, 255);
                rect(width-115, ballY, 22, 110);

                //! Variable Changes
                ballX += addX;
                ballY += addY;

                //! Collisions
                if (ballY + 20 >= height || ballY <= 20) addY = -addY;

                if (ballX >= width - 146) addX = -addX;

                if (ballX <= 287/2 && ballX >= 140 && mouseY + 55 >= ballY && ballY >= mouseY - 55) {
                    addX = -addX;
                    score += 1;
                }

                if (ballX <= 20) {
                    ballX = width/2;
                    lives -= 1;
                }
            }
        } else { //! Game Over
            fill("red");
            stroke("red");
            textSize(80);
            text("GAME OVER", width/2, height/2);
        }
    } else {
        fill(255, 255, 255);
        stroke(255, 255, 255);
        textSize(40);
        text("Press the spacebar to start.", width/2, height/2);
    }
}

function keyPressed() {
    if (key == ' ') { // TODO: Ping Pong
        gameStarted = true;
    }
}
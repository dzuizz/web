let ballX = 500, ballY = 850, addX = 3, addY = -3; // * Ping Pong

function setup() {
    let div_width = document.getElementById("sketch-holder").clientWidth;

    let canvas = createCanvas(div_width, 1000);
    canvas.parent("sketch-holder")
}

function draw() {
    clear();
    // background('black');
    
    // Multiplication Circle // * in progress...
    // Variables
    let N = 50;
    let F = frameCount / 2500;

    // Settings
    translate(500, 500);
    // drawTickAxes() // Coordinate System

    // Main Circle
    fill('black');
    stroke('black');
    strokeWeight(5);
    circle(0, 0, 450);

    // Settings
    strokeWeight(1);

    for (let i = 1; i <= N; i++) {
        // Red Lines
        stroke('red');
        let red_x1 = 225 * cos(360 / N * i);
        let red_y1 = 225 * sin(360 / N * i);
        let red_x2 = 225 * cos(360 / N * ((i * F) % N));
        let red_y2 = 225 * sin(360 / N * ((i * F) % N));
        line(red_x1, red_y1, red_x2, red_y2);

        // Blue Lines
        stroke('blue');
        let blue_x1 = 225 * cos(360 / N * i + 20);
        let blue_y1 = 225 * sin(360 / N * i + 20);
        let blue_x2 = 225 * cos(360 / N * ((i * F) % N) + 20);
        let blue_y2 = 225 * sin(360 / N * ((i * F) % N) + 20);
        line(blue_x1, blue_y1, blue_x2, blue_y2);

        // Green Lines
        stroke('green');
        let green_x1 = 225 * cos(360 / N * i + 40);
        let green_y1 = 225 * sin(360 / N * i + 40);
        let green_x2 = 225 * cos(360 / N * ((i * F) % N) + 40);
        let green_y2 = 225 * sin(360 / N * ((i * F) % N) + 40);
        line(green_x1, green_y1, green_x2, green_y2);
    }

    // Ping Pong // * in progress...
    /*
    // User
    fill('blue');
    rectMode(CENTER);
    user = rect(75, mouseY, 25, 75);

    // Ball
    fill('red');
    circle(ballX, ballY, 25);

    // Opponent
    fill('purple');
    rect(925, ballY, 25, 75);

    ballX += addX;
    ballY += addY;

    if (ballX == 100) {
        if (mouseY - 75 / 2 < ballY && ballY < mouseY + 75 / 2) {
            addX = 3;
        }
    }
    if (ballX >= 900) {
        addX = -3;
    }
    else if ((ballX == 100 && (mouseY + 75 / 2 > ballY && ballY < mouseY - 75 / 2)) || (ballX - 25 / 2 <= 0)) {
        addX = 3;
    }
    if (ballY >= 1975/2) {
        addY = -3;
    }
    else if (ballY <= 25 / 2) {
        addY = 3;
    }
    */
}

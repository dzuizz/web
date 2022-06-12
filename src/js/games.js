// Rock Paper Scissors
let computer_move, user_move, user_score = 0, computer_score = 0;

choices = {
	"Rock": 1,
	"Paper": 2,
	"Scissors": 3,
};

function move(move) {
	user_move = move;
	document.getElementById("rock").classList.remove('outline', 'scale-110', 'font-xl', 'decoration-indigo-900');
	document.getElementById("paper").classList.remove('outline', 'scale-110', 'font-xl', 'decoration-indigo-900');
	document.getElementById("scissors").classList.remove('outline', 'scale-110', 'font-xl', 'decoration-indigo-900');
	document.getElementById(move).classList.add('outline', 'scale-110', 'font-xl', 'decoration-indigo-900');
}

function start_round() {
	computer_move = Math.floor(Math.random() * 3) + 1;

	// * User vs Computer
	if (user_move == "rock") {
		if (computer_move == 1) { // * Rock vs Rock
			document.getElementById("result-text").innerHTML = "It's a tie!";
		} else if (computer_move == 2) { // * Rock vs Paper
			document.getElementById("result-text").innerHTML = "The computer has won, paper will wrap rock up.";
			computer_score++;
		} else { // * Rock vs Scissors
			document.getElementById("result-text").innerHTML = "You have won, rock will break scissors";
			user_score++;
		}
	} else if (user_move == "paper") {
		if (computer_move == 1) { // * Paper vs Rock
			document.getElementById("result-text").innerHTML = "You have won, paper will wrap rock up.";
			user_score++;
		} else if (computer_move == 2) { // * Paper vs Paper
			document.getElementById("result-text").innerHTML = "It's a tie!";
		} else { // * Paper vs Scissors
			document.getElementById("result-text").innerHTML = "The computer has won, scissors will cut paper.";
			computer_score++;
		}
	} else {
		if (computer_move == 1) { // * Scissors vs Rock
			document.getElementById("result-text").innerHTML = "The computer has won, rock will break scissors.";
			computer_score++;
		} else if (computer_move == 2) { // * Scissors vs Paper
			document.getElementById("result-text").innerHTML = "You have won, scissors will cut paper.";
			user_score++;
		} else { // * Scissors vs Scissors
			document.getElementById("result-text").innerHTML = "It's a tie!";
		}
	}

	document.getElementById("user-score").innerHTML = user_score;
	document.getElementById("computer-score").innerHTML = computer_score;
}

// Tic Tac Toe
let grid = ["A1", "A2", "A3",
	"B1", "B2", "B3",
	"C1", "C2", "C3"];

for (let i = 0; i < grid.length; i++) {
	document.getElementById(grid[i]).addEventListener('click', function () {
		if (document.getElementById(grid[i]).innerHTML == "") {
			document.getElementById(grid[i]).innerHTML = "X";
		}
	});
}
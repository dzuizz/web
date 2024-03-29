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

function start_rps_round() {
	computer_move = Math.floor(Math.random() * 3) + 1;

	// * User vs Computer
	if (user_move == "rock") {
		if (computer_move == 1) { // * Rock vs Rock
			document.getElementById("rps-result-text").innerHTML = "It's a tie!";
		} else if (computer_move == 2) { // * Rock vs Paper
			document.getElementById("rps-result-text").innerHTML = "The computer has won, paper will wrap rock up.";
			computer_score++;
		} else { // * Rock vs Scissors
			document.getElementById("rps-result-text").innerHTML = "You have won, rock will break scissors";
			user_score++;
		}
	} else if (user_move == "paper") {
		if (computer_move == 1) { // * Paper vs Rock
			document.getElementById("rps-result-text").innerHTML = "You have won, paper will wrap rock up.";
			user_score++;
		} else if (computer_move == 2) { // * Paper vs Paper
			document.getElementById("rps-result-text").innerHTML = "It's a tie!";
		} else { // * Paper vs Scissors
			document.getElementById("rps-result-text").innerHTML = "The computer has won, scissors will cut paper.";
			computer_score++;
		}
	} else {
		if (computer_move == 1) { // * Scissors vs Rock
			document.getElementById("rps-result-text").innerHTML = "The computer has won, rock will break scissors.";
			computer_score++;
		} else if (computer_move == 2) { // * Scissors vs Paper
			document.getElementById("rps-result-text").innerHTML = "You have won, scissors will cut paper.";
			user_score++;
		} else { // * Scissors vs Scissors
			document.getElementById("rps-result-text").innerHTML = "It's a tie!";
		}
	}

	document.getElementById("user-score").innerHTML = user_score;
	document.getElementById("computer-score").innerHTML = computer_score;
}

// Tic Tac Toe
let moves = 0;
let game_over = false;
let grid = ["A1", "A2", "A3",
			"B1", "B2", "B3",
			"C1", "C2", "C3"];

function check() {
	for (let i = 0; i < 9; i += 3) { // * Check Row
		if (document.getElementById(grid[i]).innerHTML == document.getElementById(grid[i + 1]).innerHTML &&
			document.getElementById(grid[i]).innerHTML == document.getElementById(grid[i + 2]).innerHTML &&
			document.getElementById(grid[i]).innerHTML != "") {
			document.getElementById(grid[i]).classList.add("text-purple-500");
			document.getElementById(grid[i + 1]).classList.add("text-purple-500");
			document.getElementById(grid[i + 2]).classList.add("text-purple-500");
			game_over = true;
		}
	}

	for (let i = 0; i < 3; i++) { // * Check Column
		if (document.getElementById(grid[i]).innerHTML == document.getElementById(grid[i + 3]).innerHTML &&
			document.getElementById(grid[i]).innerHTML == document.getElementById(grid[i + 6]).innerHTML &&
			document.getElementById(grid[i]).innerHTML != "") {
			document.getElementById(grid[i]).classList.add("text-purple-500");
			document.getElementById(grid[i + 3]).classList.add("text-purple-500");
			document.getElementById(grid[i + 6]).classList.add("text-purple-500");
			game_over = true;
		}
	}

	// * Check Left-Right Diagonal
	if (document.getElementById(grid[0]).innerHTML == document.getElementById(grid[4]).innerHTML &&
		document.getElementById(grid[0]).innerHTML == document.getElementById(grid[8]).innerHTML &&
		document.getElementById(grid[0]).innerHTML != "") {
		document.getElementById(grid[0]).classList.add("text-purple-500");
		document.getElementById(grid[4]).classList.add("text-purple-500");
		document.getElementById(grid[8]).classList.add("text-purple-500");
		game_over = true;
	}

	// * Check Right-Left Diagonal
	if (document.getElementById(grid[2]).innerHTML == document.getElementById(grid[4]).innerHTML &&
		document.getElementById(grid[2]).innerHTML == document.getElementById(grid[6]).innerHTML &&
		document.getElementById(grid[2]).innerHTML != "") {
		document.getElementById(grid[2]).classList.add("text-purple-500");
		document.getElementById(grid[4]).classList.add("text-purple-500");
		document.getElementById(grid[6]).classList.add("text-purple-500");
		game_over = true;
	}

	moves++;
}

function start_3t_round() {
	game_over = false;
	moves = 0;

	for (let i = 0; i < grid.length; i++) {
		document.getElementById(grid[i]).innerHTML = "";
		document.getElementById(grid[i]).classList.remove("text-purple-500");

		document.getElementById(grid[i]).addEventListener('click', function () {
			if (document.getElementById(grid[i]).innerHTML == "" && !game_over) {
				document.getElementById(grid[i]).innerHTML = "X";
				check();
	
				if (moves < 9 && !game_over) {
					let pos = Math.floor(Math.random() * 9);
					while (document.getElementById(grid[pos]).innerHTML != "") {
						pos = Math.floor(Math.random() * 9);
					}
					document.getElementById(grid[pos]).innerHTML = "O";
					check();
				}
			}
		});
	}
}

for (let i = 0; i < grid.length; i++) {
	document.getElementById(grid[i]).innerHTML = "";
	document.getElementById(grid[i]).addEventListener('click', function () {
		if (document.getElementById(grid[i]).innerHTML == "" && !game_over) {
			document.getElementById(grid[i]).innerHTML = "X";
			check();

			if (moves < 9 && !game_over) {
				let pos = Math.floor(Math.random() * 9);
				while (document.getElementById(grid[pos]).innerHTML != "") {
					pos = Math.floor(Math.random() * 9);
				}
				document.getElementById(grid[pos]).innerHTML = "O";
				check();
			}
		}
	});
}
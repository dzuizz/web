/******************************************
 *  Author : Ahmad Dzuizz Annajib   
 *  Created On : Sat Mar 19 2022
 *  File : rockpaperscissors.js
 *******************************************/

var randomGuess, userGuess, userScore = 0, computerScore = 0, scissors, paper, stone;

choices = ["Rock", "Paper", "Scissors"];

function round() {
	randomGuess = Math.floor(Math.random() * 3) + 1;
	userGuess = prompt("To play this game, enter your choice: Scissors(1), Paper(2) or Stone(3).");

	document.getElementById("user-choice").innerHTML = choices[userGuess - 1];
	document.getElementById("computer-choice").innerHTML = choices[randomGuess - 1];

	if (parseInt(userGuess) === randomGuess) {
		document.getElementById("result").innerHTML = "<p><br>This is a draw.</p>";
	} else if (parseInt(userGuess) === 1 && randomGuess === 2) {
		document.getElementById("result").innerHTML = "<p><br>You have won, scissors will cut paper up.</p>";
	} else if (parseInt(userGuess) === 2 && randomGuess === 1) {
		document.getElementById("result").innerHTML = "<p><br>The computer has won, scissors will cut paper up.</p>";
	} else if (parseInt(userGuess) === 2 && randomGuess === 3) {
		document.getElementById("result").innerHTML = "<p><br>You have won, paper will wrap up stones.</p>";
	} else if (parseInt(userGuess) === 3 && randomGuess === 2) {
		document.getElementById("result").innerHTML = "<p><br>The computer has won, paper will wrap up stones.</p>";
	} else if (parseInt(userGuess) === 3 && randomGuess === 1) {
		document.getElementById("result").innerHTML = "<p><br>You have won, stones will break scissors.</p>";
	} else if (parseInt(userGuess) === 1 && randomGuess === 3) {
		document.getElementById("result").innerHTML = "<p><br>The computer has won, stones will break scissors.</p>";
	} else if (userGuess === "" && userGuess === null) {
		document.getElementById("result").innerHTML = "<p><br>You have not entered your choice.</p>";
	}
}
let button = document.getElementById("button");
let sheesh = document.getElementById("sheesh");
let bruh = document.getElementById("bruh");

let count = 0;

button.addEventListener('click', function () {
    if (count == 0) button.innerHTML = "Are you sure?";
    else if (count == 1) {
        button.innerHTML = "You have been warned...";
        for (let i = 1; i <= 20; i++) {
            bruh.innerHTML = "<img src='../src/bruh.jpeg'></img>";
        }
    }
    count++;
});
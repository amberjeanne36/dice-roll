
/* Roll first dice */
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var firstDice = document.querySelector(".img1");

var randomDice1 = "/dice" + randomNumber1 + ".png";

var randomDice1Source = "./images" + randomDice1;

firstDice.setAttribute("src", randomDice1Source);


/* Roll second dice */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var secondDice = document.querySelector(".img2");

var randomDice2 = "/dice" + randomNumber2 + ".png";

var randomDice2Source = "./images" + randomDice2;

secondDice.setAttribute("src", randomDice2Source);

/* Display winner */
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").textContent = "It's a Tie! 😕";
}

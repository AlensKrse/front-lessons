
function randomNumber() {
    return Math.floor((Math.random() * 6) + 1);
}

var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();

function setRandomImage(className, randomNumber) {
    document.getElementsByClassName(className)[0].attributes.getNamedItem("src").textContent = "images/dice" + randomNumber + ".png";
}

function showTheWinner() {
    var text;
    if (randomNumber1 > randomNumber2) {
        text = "🚩 Player 1 Wins!"
    } else if (randomNumber1 < randomNumber2) {
        text = "Player 2 Wins! 🚩"
    } else {
        text = "🚩 Draw! 🚩"
    }

    changeHeading(text);
}

function changeHeading(text) {
    document.querySelector("h1").innerText = text;
}

setRandomImage("img1", randomNumber1);
setRandomImage("img2", randomNumber2);
showTheWinner();
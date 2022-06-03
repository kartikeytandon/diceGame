// working on the first die
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+ randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// working on the second die 
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// working of if and else conditions 

if(randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML="Draw";
} else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins 🚩";
} else {
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}

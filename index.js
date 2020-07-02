function reload() {
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	var imgDice = "images/dice" + randomNumber1 + ".png";
	var imgLeft = document.querySelector(".img1").setAttribute("src", imgDice);
	// ----------------
	var randomNumber2 = Math.floor(Math.random() * 6) + 1;
	var imgDice2 = "images/dice" + randomNumber2 + ".png";
	var imgRight = document
		.querySelector(".img2")
		.setAttribute("src", imgDice2);

	if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").innerHTML = "Joueur 1 win";
	} else if (randomNumber1 < randomNumber2) {
		document.querySelector("h1").innerHTML = "Joueur 2 win";
	} else if (randomNumber1 === randomNumber2) {
		document.querySelector("h1").innerHTML = "Égalité";
	}
}

const wrapper = document.getElementById("wrapper");
const deSom = document.getElementById("deSom");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");

let mySum;
let sound = new Audio();

function makeSum() {
	var a = Math.floor(Math.random() * 10 + 1);
	var b = Math.floor(Math.random() * 10 + 1);
	var c = a * b;
	mySum = a + " * " + b;
	deSom.innerHTML = mySum;
	myAnswer.focus();
}

function keyPressed(evt) {
	if(evt.keyCode == 13) {
		if (eval(mySum)==myAnswer.value) {
			feedback.src = "img/good.png";
			sound.src = "img/goed.wav";
			sound.play();
		} else {
			feedback.src = "img/tenor.gif";
			sound.src = "img/wrong.wav";
			sound.play();
		}
		window.setTimeout(waiting, 2000);
	}
}

function waiting() {
	feedback.src = "img/feedback.png";
	myAnswer.value = "";
	makeSum();
}

makeSum();
myAnswer.addEventListener("keydown", keyPressed, false);

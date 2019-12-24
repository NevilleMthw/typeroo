var time = document.querySelector('.time');
var theTime = document.querySelector('#theTime');
secs = 31;
secs1 = 21;
secs2 = 11;
var button = document.querySelector("button");
var easy = document.getElementById('easy');
var medium = document.getElementById('medium');
var hard = document.getElementById('hard');
var words = document.querySelector(".words");
var home = document.getElementById('home');
var spans;
var typed;
var bossHp;
var correct;
var score;
var gameend;
var level;
var finalScore;
var health = document.querySelector(".health");
var game = document.getElementById("game");
var gamewin = document.getElementById("gamewin");
var gameover = document.getElementById("gameover");
var gamebox = document.getElementById("gamebox");
var monster_start = document.getElementById("monster_start");
var monster_die = document.getElementById("monster_die");
var timestatus = document.getElementById("timestatus");
var updatescore = document.getElementById("updatescore");
var scoreboard = document.getElementById("score");
home.disabled = false;
home.addEventListener("click", function(e) {
	onclick = window.location.reload()
});

function monsterHp() {
	bossHp = 100;
	gameend = false;
	updatescore.innerHTML = "0";
}
easy.addEventListener("click", function(e) {
	countdown();
	random();
	monsterHp();
	winner();
	scoreboard.style.display = "block";
	easy.disabled = true;
	easy.style.display = "none";
	medium.style.display = "none";
	hard.style.display = "none";
	mainmenu.style.display = 'block';
});
medium.addEventListener("click", function(e) {
	countdown2();
	random();
	monsterHp();
	winner();
	easy.style.display = "none";
	medium.style.display = "none";
	hard.style.display = "none";
	scoreboard.style.display = "block";
	medium.disabled = true;
});
hard.addEventListener("click", function(e) {
	countdown3();
	random();
	monsterHp();
	winner();
	easy.style.display = "none";
	medium.style.display = "none";
	hard.style.display = "none";
	scoreboard.style.display = "block";
	hard.disabled = true;
});

function countdown() {
	finalScore = score;
	score = 0;
	var cd = setInterval(function() {
		secs--;
		theTime.innerHTML = secs;
		if (secs === 0) {
			score.innerHTML = "0";
			words.innerHTML = "";
			clearInterval(cd);
			gameover.style.display = 'block';
			gamewin.style.display = 'none';
		}
		
		// storing score to localStorage
		for  (let i=0, len = localStorage.length; i < len; i++) {
			let pointArray = {};
			let points = score;
			let key = localStorage.key(i);
			let value = localStorage[key];
			pointArray.points = score;
			pointArray.username2=sessionStorage['loggedInUsername'];
			let getKey = JSON.parse(localStorage.getItem(key));
			pointArray.password = getKey.password;
			localStorage[pointArray.username2] = JSON.stringify(pointArray);
			localStorage.setItem("points", points);
		}

	}, 1000);
}

function countdown2() {
	finalScore = score;
	score = 0;
	var cd = setInterval(function() {
		secs1--;
		theTime.innerHTML = secs1;
		if (secs1 === 0) {
			score.innerHTML = "0";
			words.innerHTML = "";
			clearInterval(cd);
			gameover.style.display = 'block';
			gamewin.style.display = 'none';
		}
		for  (let i=0, len = localStorage.length; i < len; i++) {
			let pointArray = {};
			let points = score;
			let key = localStorage.key(i);
			let value = localStorage[key];
			pointArray.points = score;
			pointArray.username2=sessionStorage['loggedInUsername'];
			let getKey = JSON.parse(localStorage.getItem(key));
			pointArray.password = getKey.password;
			localStorage[pointArray.username2] = JSON.stringify(pointArray);
			localStorage.setItem("points", points);
		}
	}, 1000);
}

function countdown3() {	
	finalScore = score;
	score = 0;
	var cd = setInterval(function() {
		secs2--;
		theTime.innerHTML = secs2;
		if (secs2 === 0) {
			score.innerHTML = "0";
			words.innerHTML = "";
			clearInterval(cd);
			gameover.style.display = 'block';
			gamewin.style.display = 'none';
		}
		for  (let i=0, len = localStorage.length; i < len; i++) {
			let pointArray = {};
			let points = score;
			let key = localStorage.key(i);
			let value = localStorage[key];
			pointArray.points = score;
			pointArray.username2=sessionStorage['loggedInUsername'];
			let getKey = JSON.parse(localStorage.getItem(key));
			pointArray.password = getKey.password;
			localStorage[pointArray.username2] = JSON.stringify(pointArray);
			localStorage.setItem("points", points);
		}
	}, 1000);
}

function winner() {
	
	if (bossHp <= 0) {
		monster_start.style.display = "none";
		monster_die.style.display = "block";
		health.style.display = "none";
		setInterval(function() {
			game.style.display = "none";
			gamewin.style.display = "block";
			gameover.style.display = 'none';
		}, 1000);
		bossHp = 100;
	}
	for  (let i=0, len = localStorage.length; i < len; i++) {
		let pointArray = {};
		let points = score;
		let key = localStorage.key(i);
		let value = localStorage[key];
		pointArray.points = score;
		pointArray.username2=sessionStorage['loggedInUsername'];
		let getKey = JSON.parse(localStorage.getItem(key));
		pointArray.password = getKey.password;
		localStorage[pointArray.username2] = JSON.stringify(pointArray);
		localStorage.setItem("points", points);
	}
	requestAnimationFrame(winner);
}

function random() {
	words.innerHTML = "";
	var random = Math.floor(Math.random() * wordList.length);
	var wordArray = wordList[random].split("");
	for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
		var span = document.createElement("span");
		span.classList.add("span");
		span.innerHTML = wordArray[i];
		words.appendChild(span);
	}
	spans = document.querySelectorAll(".span");
}
const wordList = [
				'ABANDON',
                'ABILITY',
                'ABLE',
                'ABOUT',
                'ABOVE',
                'ABROAD',
                'ABSENCE',
                'ABSOLUTE',
                'ABSOLUTELY',
                'ABSORB',
                'ABUSE',
                'ACADEMIC',
                'ACCEPT',
                'ACCESS',
                'ACCIDENT',
                'ACCOMPANY',
                'ACCOMPLISH',
                'ACCORDING',
                'ACCOUNT',
                'ACCURATE',
                'ACCUSE',
                'ACHIEVE',
                'ACHIEVEMENT',
				'ACID',
				'BRIEF',
                'BRIEFLY',
                'BRIGHT',
                'BRILLIANT',
                'BRING',
                'BRITISH',
                'BROAD',
                'BROKEN',
                'BROTHER',
                'BROWN',
                'BRUSH',
                'BUCK',
                'BUDGET',
				'BUILD',
				'CERTAINLY',
                'CHAIN',
                'CHAIR',
                'CHAIRMAN',
                'CHALLENGE',
                'CHAMBER',
                'CHAMPION',
                'CHAMPIONSHIP',
                'CHANCE',
                'CHANGE',
                'CHANGING',
                'CHANNEL',
                'CHAPTER',
                'CHARACTER',
                'CHARACTERISTIC',
                'CHARACTERIZE',
                'CHARGE',
                'CHARITY',
                'CHART',
                'CHASE',
                'CHEAP',
                'CHECK',
                'CHEEK',
                'CHEESE',
                'CHEF',
                'CHEMICAL',
                'CHEST',
                'CHICKEN',
                'CHIEF',
                'CHILD',
                'CHILDHOOD',
                'CHINESE',
                'CHIP',
                'CHOCOLATE',
                'CHOICE',
				'CHOLESTEROL',
				'DELIVERY',
                'DEMAND',
                'DEMOCRACY',
                'DEMOCRAT',
                'DEMOCRATIC',
                'DEMONSTRATE',
                'DEMONSTRATION',
                'DENY',
                'DEPARTMENT',
                'DEPEND',
                'DEPENDENT',
                'DEPENDING',
                'DEPICT',
                'DEPRESSION',
                'DEPTH',
                'DEPUTY',
                'DERIVE',
                'DESCRIBE',
                'DESCRIPTION',
                'DESERT',
                'DESERVE',
                'DESIGN',
				'DESIGNER'
]

function typing(e) {
	typed = String.fromCharCode(e.which);
	for (var i = 0; i < spans.length; i++) {
		if (spans[i].innerHTML === typed) { // if typed letter is the one from the word
			if (spans[i].classList.contains("bg")) { // if it already has class with the bacground color then check the next one
				continue;
			} else if (spans[i].classList.contains("bg") === false && spans[i - 1] === undefined || spans[i - 1].classList.contains("bg") !== false) { // if it dont have class, if it is not first letter or if the letter before it dont have class (this is done to avoid marking the letters who are not in order for being checked, for example if you have two "A"s so to avoid marking both of them if the first one is at the index 0 and second at index 5 for example)
				spans[i].classList.add("bg");
				break;
			}
		}
	}
	var checker = 0;
	for (var j = 0; j < spans.length; j++) { //checking if all the letters are typed
		if (spans[j].className === "span bg") {
			checker++;
		}
		if (checker === spans.length) { 
			updatescore.innerHTML = score;
			words.classList.add("animated");
			words.classList.add("fadeOut");
			document.removeEventListener("keydown", typing, false);
			score = score + 10; // increment the score
			updatescore.innerHTML = score; //add score
			setTimeout(function() {
				words.className = "words"; // restart the classes
				random(); // give another word
				document.addEventListener("keydown", typing, false);
			}, 400);
			bossHp -= 10;
			health.style.width = bossHp + "%";
		}
	}
}

document.addEventListener("keydown", typing, false);
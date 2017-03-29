
// VARIABLES

var newGameBtn = document.getElementById('js-newGameButton');
var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');
var gameState = 'notStarted', //started // ended
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};
var newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElem'),
	resultsElem = document.getElementById('js-resultsTableElement');
var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');

// EVENT LISTENERS 

newGameBtn.addEventListener('click', newGame());

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

// FUNCTIONS

function setGameElements() {

	switch(gameState) {

		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
		break;

		case 'ended':
			newGameBtn.innerText = 'Jeszcze raz';

		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}

function newGame() {

	player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
	if(player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();

		playerNameElem.innerHTML = player.name;
		//setGamePoints(); 
	}
}

function playerPick(playerPick) {

	console.log(playerPick);
}


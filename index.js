// 0 = empty
// 1 = coin
// 2 = brick
// 3 = berry
let worlds = [
	[
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 0, 1, 1, 1, 1, 1, 3, 1, 2],
		[2, 1, 2, 2, 2, 1, 2, 2, 1, 2],
		[2, 1, 1, 1, 1, 3, 1, 1, 1, 2],
		[2, 2, 2, 2, 1, 2, 1, 2, 2, 2],
		[2, 1, 3, 1, 1, 1, 1, 1, 1, 2],
		[2, 1, 2, 2, 1, 2, 2, 2, 1, 2],
		[2, 1, 1, 1, 1, 1, 3, 1, 1, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	],
	[
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 0, 1, 1, 1, 1, 1, 3, 1, 1, 2],
		[2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2],
		[2, 1, 2, 1, 1, 3, 1, 1, 2, 1, 2],
		[2, 1, 2, 1, 2, 2, 2, 2, 2, 3, 2],
		[2, 3, 1, 1, 1, 1, 1, 1, 2, 1, 2],
		[2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2],
		[2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
		[2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	],
	[
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 0, 1, 1, 1, 1, 1, 3, 1, 2, 3, 2],
		[2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
		[2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2],
		[2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 2],
		[2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2],
		[2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
		[2, 3, 1, 1, 2, 3, 1, 1, 1, 2, 1, 2],
		[2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2],
		[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	],
	[
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 0, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2],
		[2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2],
		[2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2],
		[2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2],
		[2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		[2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
		[2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2],
		[2, 1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 3, 2],
		[2, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2],
		[2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	],
	[
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 0, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 1, 2],
		[2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2],
		[2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 2, 1, 2],
		[2, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2],
		[2, 1, 3, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2],
		[2, 1, 2, 1, 2, 1, 1, 1, 3, 2, 3, 2, 1, 2],
		[2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
		[2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
		[2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 3, 2],
		[2, 1, 1, 1, 2, 1, 3, 1, 1, 1, 1, 1, 1, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	],
];

let score = 0;

let continueToMove;
let ghostContinueToMove;

let ghost1 = {
	x: 0,
	y: 0,
	previousMove: 0,
};
let ghost2 = {
	x: 0,
	y: 0,
	previousMove: 0,
};
let ghost3 = {
	x: 0,
	y: 0,
	previousMove: 0,
};
let pacman = {
	x: 1,
	y: 1,
	transform: "rotate(0deg)",
};

// random number between 0 and 4
function randomNumber() {
	return Math.floor(Math.random() * 5);
}
let index = randomNumber();
let world = worlds[index];

let numberOfCoins = 0;
for (let i = 0; i < world.length; i++) {
	for (let j = 0; j < world[i].length; j++) {
		if (world[i][j] === 1 || world[i][j] === 3) {
			numberOfCoins++;
		}
	}
}

function InitialGhostPosition() {
	while (true) {
		let y = Math.floor(Math.random() * world.length);
		let x = Math.floor(Math.random() * world[0].length);
		if (world[y][x] === 1) {
			return [y, x];
		}
	}
}

let initialGhost = InitialGhostPosition();
ghost1.y = initialGhost[0];
ghost1.x = initialGhost[1];
initialGhost = InitialGhostPosition();
ghost2.y = initialGhost[0];
ghost2.x = initialGhost[1];
initialGhost = InitialGhostPosition();
ghost3.y = initialGhost[0];
ghost3.x = initialGhost[1];

function displayGhost(name, ghost) {
	document.getElementById(name).style.transform = ghost.transform;
	document.getElementById(name).style.left = ghost.x * 52 + "px";
	document.getElementById(name).style.top = ghost.y * 52 + "px";
}

displayGhost("ghost1", ghost1);
displayGhost("ghost2", ghost2);
displayGhost("ghost3", ghost3);

function displayWorld() {
	let output = "";
	for (let i = 0; i < world.length; i++) {
		output += "\n<div class='row'>";
		for (let j = 0; j < world[i].length; j++) {
			if (world[i][j] === 0) {
				output += "<div class='empty'></div>";
			} else if (world[i][j] === 1) {
				output += "<div class='coin'></div>";
			} else if (world[i][j] === 2) {
				output += "<div class='brick'></div>";
			} else if (world[i][j] === 3) {
				output += "<div class='berry'></div>";
			}
		}
		output += "\n</div>";
	}
	document.getElementById("world").innerHTML = output;
}

function displayScore() {
	document.getElementById("score").innerHTML = score;
	if (numberOfCoins === 0) {
		clearInterval(continueToMove);
		clearInterval(ghostContinueToMove);
		alert("You win! Start a new game!");
		window.location.reload();
	}
}
function displayPacman() {
	document.getElementById("pacman").style.transform = pacman.transform;
	document.getElementById("pacman").style.left = pacman.x * 52 + "px";
	document.getElementById("pacman").style.top = pacman.y * 52 + "px";
}
function checkCollision() {
	if (world[pacman.y][pacman.x] === 1) {
		world[pacman.y][pacman.x] = 0;
		new Audio();
		let audio = new Audio("./sound/pacman_chomp.wav");
		audio.play();
		score += 10;
		numberOfCoins--;
		displayWorld();
	} else if (world[pacman.y][pacman.x] === 3) {
		world[pacman.y][pacman.x] = 0;
		new Audio();
		let audio = new Audio("./sound/pacman_eatfruit.wav");
		audio.play();
		score += 20;
		numberOfCoins--;
		displayWorld();
	}
	console.log(numberOfCoins);
}

function checkGhostCollision() {
	if (pacman.y == ghost1.y && pacman.x === ghost1.x) {
		console.log("PACMAN Y: " + pacman.y + " PACMAN X: " + pacman.x);
		console.log("GHOST1 Y: " + ghost1.y + " GHOST X: " + ghost1.x);
		new Audio();
		let audio = new Audio("./sound/pacman_death.wav");
		audio.play();
		clearInterval(continueToMove);
		clearInterval(ghostContinueToMove);

		setTimeout(() => {
			alert("You lose! Start a new game!");
			window.location.reload();
		}, 500);
	} else if (pacman.y == ghost2.y && pacman.x === ghost2.x) {
		new Audio();
		let audio = new Audio("./sound/pacman_death.wav");
		audio.play();
		clearInterval(continueToMove);
		clearInterval(ghostContinueToMove);
		displayWorld();

		setTimeout(() => {
			alert("You lose! Start a new game!");
			window.location.reload();
		}, 500);
	} else if (pacman.y == ghost3.y && pacman.x === ghost3.x) {
		new Audio();
		let audio = new Audio("./sound/pacman_death.wav");
		audio.play();
		clearInterval(continueToMove);
		clearInterval(ghostContinueToMove);
		displayWorld();
		setTimeout(() => {
			alert("You lose! Start a new game!");
			window.location.reload();
		}, 500);
	}
}

function isBoxBrick(y, x) {
	if (world[y][x] === 2) {
		clearInterval(continueToMove);
		return true;
	}
	return false;
}
function isGhostGotoBrick(y, x) {
	if (world[y][x] === 2) {
		return true;
	}
	return false;
}
function ghostMove(ghost) {
	let randomTwo;
	let randomThree;
	randomNumber = Math.floor(Math.random() * 4);
	while (true) {
		// 0 top
		// 1 right
		// 2 bottom
		// 3 left

		if (randomNumber !== ghost.previousMove) {
			if (
				ghost.previousMove === 0 &&
				!isGhostGotoBrick(ghost.y - 1, ghost.x)
			) {
				// if top is not brick
				if (
					!isGhostGotoBrick(ghost.y, ghost.x + 1) &&
					!isGhostGotoBrick(ghost.y, ghost.x - 1)
				) {
					// goto top left right
					randomThree = Math.floor(Math.random() * 3);
					if (randomThree === 0) {
						ghost.y--;
						ghost.previousMove = 0;
					}
					if (randomThree === 1) {
						ghost.x++;
						ghost.previousMove = 1;
					}
					if (randomThree === 2) {
						ghost.x--;
						ghost.previousMove = 3;
					}
					break;
				}
				if (!isGhostGotoBrick(ghost.y, ghost.x - 1)) {
					// if left is not brick goto top or left
					randomTwo = Math.floor(Math.random() * 2);
					if (randomTwo === 0) {
						ghost.y--;
						ghost.previousMove = 0;
					}
					if (randomTwo === 1) {
						ghost.x--;
						ghost.previousMove = 3;
					}
					break;
				}
				if (!isGhostGotoBrick(ghost.y, ghost.x + 1)) {
					// if right is not brick goto top or right
					randomTwo = Math.floor(Math.random() * 2);
					if (randomTwo === 0) {
						ghost.y--;
						ghost.previousMove = 0;
					}
					if (randomTwo === 1) {
						ghost.x++;
						ghost.previousMove = 1;
					}
					break;
				}
				ghost.y--;
				break;
			} else if (
				ghost.previousMove === 1 &&
				!isGhostGotoBrick(ghost.y, ghost.x + 1)
			) {
				// if right is not brick
				if (
					!isGhostGotoBrick(ghost.y - 1, ghost.x) &&
					!isGhostGotoBrick(ghost.y + 1, ghost.x)
				) {
					// goto top right bottom
					randomThree = Math.floor(Math.random() * 3);
					if (randomThree === 0) {
						ghost.y--;
						ghost.previousMove = 0;
					}
					if (randomThree === 1) {
						ghost.x++;
						ghost.previousMove = 1;
					}
					if (randomThree === 2) {
						ghost.y++;
						ghost.previousMove = 2;
					}
					break;
				}
				if (!isGhostGotoBrick(ghost.y - 1, ghost.x)) {
					// if top is not brick goto right or top
					randomTwo = Math.floor(Math.random() * 2);
					if (randomTwo === 0) {
						ghost.y--;
						ghost.previousMove = 0;
					}
					if (randomTwo === 1) {
						ghost.x++;
						ghost.previousMove = 1;
					}
					break;
				}
				if (!isGhostGotoBrick(ghost.y + 1, ghost.x)) {
					// if bottom is not brick goto right or bottom
					randomTwo = Math.floor(Math.random() * 2);
					if (randomTwo === 0) {
						ghost.y++;
						ghost.previousMove = 2;
					}
					if (randomTwo === 1) {
						ghost.x++;
						ghost.previousMove = 1;
					}
					break;
				}

				ghost.x++;
				break;
			} else if (
				ghost.previousMove === 2 &&
				!isGhostGotoBrick(ghost.y + 1, ghost.x)
			) {
				// if bottom is not brick
				if (
					!isGhostGotoBrick(ghost.y, ghost.x + 1) &&
					!isGhostGotoBrick(ghost.y, ghost.x - 1)
				) {
					// goto bottom left right
					randomThree = Math.floor(Math.random() * 3);
					if (randomThree === 0) {
						ghost.y++;
						ghost.previousMove = 2;
					}
					if (randomThree === 1) {
						ghost.x++;
						ghost.previousMove = 1;
					}
					if (randomThree === 2) {
						ghost.x--;
						ghost.previousMove = 3;
					}
					break;
				}
				if (!isGhostGotoBrick(ghost.y, ghost.x + 1)) {
					// if right is not brick goto bottom or right
					randomTwo = Math.floor(Math.random() * 2);
					if (randomTwo === 0) {
						ghost.y++;
						ghost.previousMove = 2;
					}
					if (randomTwo === 1) {
						ghost.x++;
						ghost.previousMove = 1;
					}
					break;
				}
				if (!isGhostGotoBrick(ghost.y, ghost.x - 1)) {
					// if left is not brick goto bottom or left
					randomTwo = Math.floor(Math.random() * 2);
					if (randomTwo === 0) {
						ghost.y++;
						ghost.previousMove = 2;
					}
					if (randomTwo === 1) {
						ghost.x--;
						ghost.previousMove = 3;
					}
					break;
				}
				ghost.y++;
				break;
			} else if (
				ghost.previousMove === 3 &&
				!isGhostGotoBrick(ghost.y, ghost.x - 1)
			) {
				// if left is not brick
				if (
					!isGhostGotoBrick(ghost.y - 1, ghost.x) &&
					!isGhostGotoBrick(ghost.y + 1, ghost.x)
				) {
					// goto top left bottom
					randomThree = Math.floor(Math.random() * 3);
					if (randomThree === 0) {
						ghost.y--;
						ghost.previousMove = 0;
					}
					if (randomThree === 1) {
						ghost.x--;
						ghost.previousMove = 3;
					}
					if (randomThree === 2) {
						ghost.y++;
						ghost.previousMove = 2;
					}
					break;
				}
				if (!isGhostGotoBrick(ghost.y - 1, ghost.x)) {
					// if top is not brick goto left or top
					randomTwo = Math.floor(Math.random() * 2);
					if (randomTwo === 0) {
						ghost.y--;
						ghost.previousMove = 0;
					}
					if (randomTwo === 1) {
						ghost.x--;
						ghost.previousMove = 3;
					}
					break;
				}
				if (!isGhostGotoBrick(ghost.y + 1, ghost.x)) {
					// if bottom is not brick goto left or bottom
					randomTwo = Math.floor(Math.random() * 2);
					if (randomTwo === 0) {
						ghost.y++;
						ghost.previousMove = 2;
					}
					if (randomTwo === 1) {
						ghost.x--;
						ghost.previousMove = 3;
					}
					break;
				}
				ghost.x--;
				break;
			} else if (
				randomNumber === 0 &&
				!isGhostGotoBrick(ghost.y - 1, ghost.x)
			) {
				ghost.y--;
				ghost.previousMove = randomNumber;
				break;
			} else if (
				randomNumber === 1 &&
				!isGhostGotoBrick(ghost.y, ghost.x + 1)
			) {
				ghost.x++;
				ghost.previousMove = randomNumber;
				break;
			} else if (
				randomNumber === 2 &&
				!isGhostGotoBrick(ghost.y + 1, ghost.x)
			) {
				ghost.y++;
				ghost.previousMove = randomNumber;
				break;
			} else if (
				randomNumber === 3 &&
				!isGhostGotoBrick(ghost.y, ghost.x - 1)
			) {
				ghost.x--;
				ghost.previousMove = randomNumber;
				break;
			}
		}
		break;
	}
}
let keyCode;
document.onkeydown = function (e) {
	clearInterval(ghostContinueToMove);
	clearInterval(continueToMove);
	keyCode = e.keyCode;

	continueToMove = setInterval(function () {
		if (keyCode == 37 && !isBoxBrick(pacman.y, pacman.x - 1)) {
			// LEFT
			pacman.x--;
			pacman.transform = "rotate(180deg)";
		} else if (keyCode == 39 && !isBoxBrick(pacman.y, pacman.x + 1)) {
			// RIGHT
			pacman.x++;
			pacman.transform = "rotate(0deg)";
		} else if (keyCode == 40 && !isBoxBrick(pacman.y + 1, pacman.x)) {
			// DOWN
			pacman.y++;
			pacman.transform = "rotate(90deg)";
		} else if (keyCode == 38 && !isBoxBrick(pacman.y - 1, pacman.x)) {
			pacman.y--;
			pacman.transform = "rotate(270deg)";
			// UP
		} else {
			clearInterval(continueToMove);
		}
		displayPacman();
		checkGhostCollision();
		displayScore();
		checkCollision();
	}, 300);

	ghostContinueToMove = setInterval(() => {
		ghostMove(ghost1);
		ghostMove(ghost2);
		ghostMove(ghost3);
		displayGhost("ghost1", ghost1);
		displayGhost("ghost2", ghost2);
		displayGhost("ghost3", ghost3);
		checkGhostCollision();
	}, 300);
};

displayWorld();

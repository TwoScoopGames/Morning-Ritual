"use strict";

var games = [
	"alarm",
	"bacon",
	"brush-teeth",
	"clean-ear",
	"crack-eggs",
	"feed-cat",
	"make-bed",
	"slippers"
];

var currentGames = [];

function shuffle(o) {
	for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function getNextGame() {
	if (currentGames.length === 0) {
		currentGames = games.slice();
		shuffle(currentGames);
	}
	return currentGames.pop();
}

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var failure = game.entities.find("failure").length > 0;
	console.log(failure ? "failure" : "success");
	var scene = getNextGame();
	console.log(scene);
	var lives = game.arguments.lives;
	if (lives === undefined) {
		lives = 4;
	}
	if (failure) {
		lives--;
	}
	if (lives === 0) {
		game.switchScene("main");
	} else {
		game.switchScene(scene, { "lives": lives });
	}
};

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

function randomItem(array) {
	var i = Math.floor(Math.random() * array.length);
	return array[i];
}

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var failure = game.entities.find("failure").length > 0;
	console.log(failure ? "failure" : "success");
	var scene = randomItem(games);
	console.log(scene);
	console.log(game);
	var lives = game.arguments.lives;
	if (lives === undefined) {
		lives = 4;
	}
	console.log(lives, "lives (next scene)");
	if (failure) {
		lives--;
	}
	if (lives === 0) {
		game.switchScene("main");
	} else {
		game.switchScene(scene, { "lives": lives });
	}
};

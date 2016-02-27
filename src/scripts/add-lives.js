"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars

	var lives = game.arguments.lives;
	console.log(lives, "lives");
	if (lives === 4) {
		game.instantiatePrefab("life1");
		game.instantiatePrefab("life2");
		game.instantiatePrefab("life3");
		game.instantiatePrefab("life4");
	}
	if (lives === 3) {
		game.instantiatePrefab("life1");
		game.instantiatePrefab("life2");
		game.instantiatePrefab("life3");
	}
	if (lives === 2) {
		game.instantiatePrefab("life1");
		game.instantiatePrefab("life2");
	}
	if (lives === 1) {
		game.instantiatePrefab("life1");
	}
};

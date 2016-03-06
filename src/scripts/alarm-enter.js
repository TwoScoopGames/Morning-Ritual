"use strict";

function randomItem(array) {
	var i = Math.floor(Math.random() * array.length);
	return array[i];
}

module.exports = function(game) {
	var button = randomItem(game.entities.find("button"));
	console.log("button", game.entities.get(button, "name"));
	game.entities.set(button, "failure", true);
	game.entities.set(button, "onPress", {
		"script": "./scripts/right-button"
	});
	game.sounds.stop("Morning_Ritual_Music4.mp3");
	game.sounds.play("Morning_Ritual_Alarm.mp3", true);

	var lives = game.arguments.lives;
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

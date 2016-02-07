"use strict";

function randomItem(array) {
	var i = Math.floor(Math.random() * array.length);
	return array[i];
}

module.exports = function(game) {
	var button = randomItem(game.entities.find("button"));
	console.log("button", game.entities.get(button, "name"));
	game.entities.set(button, "failure", true);
	game.entities.set(button, "onTap", {
		"script": "./scripts/right-button"
	});
};

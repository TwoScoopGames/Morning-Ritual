"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("left");
	var slideX = game.entities.get(entity, "slideX");
	delete slideX.onLeft;
	slideX.onRight = "./scripts/bacon-right";
	game.sounds.play("Morning_Ritual_Bacon.mp3");
};

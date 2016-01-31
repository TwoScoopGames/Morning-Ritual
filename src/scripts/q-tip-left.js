"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("left");
	var slideX = game.entities.get(entity, "slideX");
	delete slideX.onLeft;
	slideX.onRight = "./scripts/q-tip-right";
	slideX.max = 300;

	var image = game.entities.get(entity, "image");
	image.name = "ear-man.png";
	image.destinationY -= 117;
	image.destinationHeight = 434;
	game.sounds.play("ear-wax");
};

"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("left");
	var slideX = game.entities.get(entity, "slideX");
	delete slideX.onLeft;
	slideX.onRight = "./scripts/tooth-brush-right";
};

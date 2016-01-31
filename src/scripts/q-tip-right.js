"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("right");
	var slideX = game.entities.get(entity, "slideX");
	delete slideX.onRight;
	game.entities.remove(entity, "failure");
};

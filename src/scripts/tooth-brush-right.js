"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("right");
	var slideX = game.entities.get(entity, "slideX");
	delete slideX.onRight;
	game.entities.remove(entity, "failure");
	game.entities.get(4, "image").name = "brush-teeth-success.png";
	game.sounds.play("Morning_Ritual_Brush_Teeth_2.mp3");
};

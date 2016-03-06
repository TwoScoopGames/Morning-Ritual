"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.remove(entity, "drag");
	game.entities.remove(entity, "snapToCenter");
	game.entities.remove(entity, "failure");
	var win = game.entities.find("failure").length === 0;
	if (win) {
		game.sounds.play("Morning_Ritual_Clothes5.mp3");
	} else {
		game.sounds.play("Morning_Ritual_Clothes4.mp3");
	}
};

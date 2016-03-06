"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("right button");
	game.entities.find("button").slice().forEach(function(button) {
		game.entities.destroy(button);
	});
	game.instantiatePrefab("buttons-flashing");

	game.sounds.stop("Morning_Ritual_Alarm.mp3");
	game.sounds.stop("radio-track-1.mp3");
	game.sounds.stop("radio-track-2.mp3");
	game.sounds.stop("radio-track-3.mp3");
	game.sounds.stop("radio-track-4.mp3");
	game.sounds.stop("radio-track-5.mp3");
	game.sounds.play("198970__thehorriblejoke__robotness.mp3");
};

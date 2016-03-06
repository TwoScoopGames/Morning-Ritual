"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars
	game.sounds.stop("Morning_Ritual_Alarm.mp3");
	game.sounds.stop("radio-track-1.mp3");
	game.sounds.stop("radio-track-2.mp3");
	game.sounds.stop("radio-track-3.mp3");
	game.sounds.stop("radio-track-4.mp3");
	game.sounds.stop("radio-track-5.mp3");
	game.sounds.stop("radio-track-5.mp3");
	game.sounds.play("Morning_Ritual_Music4.mp3", true);
};

"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars
	game.sounds.stop("alarm");
	game.sounds.stop("radio-track-1");
	game.sounds.stop("radio-track-2");
	game.sounds.stop("radio-track-3");
	game.sounds.stop("radio-track-4");
	game.sounds.stop("radio-track-5");
	game.sounds.stop("radio-track-5");
	game.sounds.play("music4", true);
};

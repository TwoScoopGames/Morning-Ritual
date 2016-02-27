"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("right button");
	game.entities.find("button").slice().forEach(function(button) {
		game.entities.destroy(button);
	});
	game.instantiatePrefab("buttons-flashing");

	game.sounds.stop("alarm");
	game.sounds.stop("radio-track-1");
	game.sounds.stop("radio-track-2");
	game.sounds.stop("radio-track-3");
	game.sounds.stop("radio-track-4");
	game.sounds.stop("radio-track-5");
	game.sounds.play("robot");
};

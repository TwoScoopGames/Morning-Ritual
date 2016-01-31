"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var gameTimers = game.entities.get(2, "timers");
	var frame = Math.floor(gameTimers.game.time / gameTimers.game.max * 7) + 1;

	if (frame < 6) {
		game.entities.get(entity, "timers").changeTimer.running = true;
		game.entities.get(entity, "timers").changeTimer.max = Math.floor(gameTimers.game.max / 7);
	}

	game.entities.get(entity, "image").name = "alarm" + frame + ".png";
};

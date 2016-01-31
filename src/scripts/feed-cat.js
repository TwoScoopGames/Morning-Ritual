"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var timers = game.entities.get(entity, "timers");
	timers.unrotateFood.running = true;
	timers.unrotateFood.time = 0;
	game.entities.get(entity, "rotation").angle = 1.0;
};

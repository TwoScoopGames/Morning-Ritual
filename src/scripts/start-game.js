"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var timers = game.entities.get(entity, "timers");
	timers.game.running = true;
	game.entities.remove(entity, "intro");
};

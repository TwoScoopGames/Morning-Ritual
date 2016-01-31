"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.get(entity, "timers").outro.running = true;
	game.entities.set(entity, "outro", true);
	game.entities.find("failure").forEach(function() {
		game.entities.get(4, "image").name = "brush-teeth-fail.png";
	});
};
"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.get(entity, "timers").outro.running = true;
	game.entities.set(entity, "outro", true);
	game.entities.find("failure").forEach(function(id) {
		game.entities.get(id, "image").name = "bacon-pan3.png";
		game.sounds.stop("bacon");
		game.sounds.play("oh-no");
	});
};

"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.get(entity, "timers").outro.running = true;
	game.entities.set(entity, "outro", true);
	var failed = game.entities.find("failure").length > 0;

	if (failed) {
		game.sounds.play("198970__thehorriblejoke__robotness.mp3");
		game.entities.find("button").slice().forEach(function(button) {
			game.entities.destroy(button);
		});
		game.entities.destroy(5);
		game.instantiatePrefab("alarm-melted");
	}
};

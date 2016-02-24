"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.get(entity, "timers").outro.running = true;
	game.entities.set(entity, "outro", true);
	game.entities.find("failure").forEach(function() {
		game.sounds.play("oh-no");
		game.instantiatePrefab("bed-hole");
		game.instantiatePrefab("eyes");
		game.instantiatePrefab("pupils");
		game.instantiatePrefab("eyelashes");
	});
};

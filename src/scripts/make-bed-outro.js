"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.get(entity, "timers").outro.running = true;
	game.entities.set(entity, "outro", true);
	var win = game.entities.find("failure").length === 0;
	if (win) {
		game.instantiatePrefab("bed-cat-1");
		game.instantiatePrefab("bed-cat-2");
		game.instantiatePrefab("bed-cat-3");
	}
	game.entities.find("failure").forEach(function() {
		game.sounds.play("oh-no");
	});
};

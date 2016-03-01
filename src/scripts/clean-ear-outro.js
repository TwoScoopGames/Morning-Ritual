"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.get(entity, "timers").outro.running = true;
	game.entities.set(entity, "outro", true);
	game.entities.find("failure").forEach(function() {
		game.instantiatePrefab("earWax");
		game.sounds.play("Morning_Ritual_Ear_Fountain.mp3");
	});
};

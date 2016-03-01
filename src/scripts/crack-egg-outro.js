"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.get(entity, "timers").outro.running = true;
	game.entities.set(entity, "outro", true);
	var failures = false;
	game.entities.find("failure").forEach(function(id) {
		game.entities.set(id, "velocity", {
			"x": 0,
			"y": -2.0
		});
		game.entities.set(id, "animation", {
			"time": 0,
			"frame": 0,
			"loop": true,
			"speed": 1,
			"name": "egg-rocket"
		});
		failures = true;
	});
	if (failures) {
		game.sounds.play("Morning_Ritual_Egg_Rocket.mp3");
	}
};

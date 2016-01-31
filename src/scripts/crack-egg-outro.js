"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.get(entity, "timers").outro.running = true;
	game.entities.set(entity, "outro", true);
	console.log("outro");
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
	});
};

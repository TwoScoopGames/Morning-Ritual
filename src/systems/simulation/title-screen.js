"use strict";
var easing = require("easing-js");

var time = 0;
module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var curtain = 7;

		var curtianTimers = game.entities.get(curtain, "timers");
		if (game.input.buttonPressed("action") && !curtianTimers.pull.running) {
			curtianTimers.pull.running = true;
			game.sounds.play("Morning_Ritual_Blind.mp3");
		}

		if (curtianTimers.pull.running) {
			if (time < 3000) {
				time += elapsed;
				game.entities.get(curtain, "position").y = easing.easeInOutBounce(time, -180, -1901 + 180, 3000);
			}
			if (time > 1500) {
				game.entities.set(1, "bg-color", "#7dcadb");
				game.sounds.play("Morning_Ritual_Music4.mp3", true);
			}
		}

	}, "logo");
};

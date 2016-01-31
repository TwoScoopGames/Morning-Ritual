"use strict";
var easing = require("easing-js");

var time = 0;
module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var curtain = 7;

		var curtianTimers = game.entities.get(curtain, "timers");
		if (game.input.buttonPressed("action")) {
			curtianTimers.pull.running = true;
			game.sounds.play("curtain-pull");
		}

		if (curtianTimers.pull.running) {
			if (time < 3000) {
				time += elapsed;
				game.entities.get(curtain, "position").y = easing.easeInOutBounce(time, -180, -1901 + 180, 3000);
			}
		}

	}, "logo");
};

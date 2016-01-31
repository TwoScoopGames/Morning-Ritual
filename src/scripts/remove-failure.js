"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.remove(entity, "failure");
	game.entities.remove(entity, "onTap");
	var last = game.entities.find("failure").length === 0;

	if (last) {
		game.entities.set(entity, "image", {
			"name": "egg-dino.png"
		});
		game.sounds.play("egg-dino");
	} else {
		game.entities.set(entity, "image", {
			"name": "egg-cracked.png"
		});
		game.sounds.play("egg-crack");
	}

};

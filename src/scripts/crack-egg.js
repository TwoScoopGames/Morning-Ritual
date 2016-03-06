"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.remove(entity, "failure");
	game.entities.remove(entity, "onTap");
	game.entities.remove(entity, "size");
	var last = game.entities.find("failure").length === 0;

	if (last) {
		game.entities.set(entity, "image", {
			"name": "egg-dino.png"
		});
		game.sounds.play("Foley_Crack_Eggs_2.mp3");
	} else {
		game.entities.set(entity, "image", {
			"name": "egg-cracked.png"
		});
		game.sounds.play("Foley_Crack_Eggs_1.mp3");
	}

};

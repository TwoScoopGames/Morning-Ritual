"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.remove(entity, "failure");
	game.entities.remove(entity, "onTap");
	var last = game.entities.find("failure").length === 0;
	game.entities.set(entity, "image", {
		"name": last ? "egg-dino.png" : "egg-cracked.png"
	});
};

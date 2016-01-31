"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.remove(entity, "failure");
	game.entities.remove(entity, "onTap");
	game.entities.set(entity, "image", {
		"name": "egg-cracked.png"
	});
};

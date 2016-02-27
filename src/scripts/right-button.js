"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("right button");
	game.entities.find("button").slice().forEach(function(button) {
		game.entities.destroy(button);
	});
	game.instantiatePrefab("buttons-flashing");
};

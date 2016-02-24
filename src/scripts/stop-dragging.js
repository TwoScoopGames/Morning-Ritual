"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.remove(entity, "drag");
	game.entities.remove(entity, "snapToCenter");
	game.entities.remove(entity, "failure");
	var win = game.entities.find("failure").length === 0;
	if (win) {
		game.instantiatePrefab("bed-cat-1");
		game.instantiatePrefab("bed-cat-2");
		game.instantiatePrefab("bed-cat-3");
	}
};

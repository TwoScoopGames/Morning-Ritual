"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.remove(entity, "drag");
	game.entities.remove(entity, "snapToCenter");
	game.entities.remove(entity, "failure");
};

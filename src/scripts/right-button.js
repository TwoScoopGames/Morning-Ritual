"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("right button");
	game.entities.remove(entity, "failure");
};

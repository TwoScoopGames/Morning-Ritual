"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var failures = game.entities.find("failure").length > 0;
	console.log("is failure?", failures);
	game.switchScene("crack-eggs");
};

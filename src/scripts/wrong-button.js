"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("wrong button");
	var image = game.entities.get(entity, "image");
	image.sourceX = 305;
};

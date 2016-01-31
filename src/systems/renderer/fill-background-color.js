"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function fillBackgroundColor(entity, context) { // eslint-disable-line no-unused-vars
		var position = game.entities.get(entity, "position");
		var size = game.entities.get(entity, "size");
		var bgColor = game.entities.get(entity, "bg-color");
		context.fillStyle = bgColor;
		context.fillRect(position.x,position.y, size.width, size.height);
	}, "bg-color");
};

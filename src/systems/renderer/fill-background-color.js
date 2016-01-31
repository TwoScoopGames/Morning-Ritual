"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function fillBackgroundColor(entity, context) { // eslint-disable-line no-unused-vars
		var viewportPosition = game.entities.get(entity, "position");
		var viewportSize = game.entities.get(entity, "size");
		context.fillStyle = "#0d2342";
		context.fillRect(viewportPosition.x,viewportPosition.y, viewportSize.width, viewportSize.height);
	}, "viewport");
};

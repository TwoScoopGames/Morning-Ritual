"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	ecs.addEach(function(entity, context) { // eslint-disable-line no-unused-vars
		var viewportPosition = game.entities.get(entity, "position");
		var viewportSize = game.entities.get(entity, "size");

		var oldCompositeOperation = context.globalCompositeOperation;
		context.globalCompositeOperation = "destination-in";

		context.fillStyle = "black";
		context.fillRect(
			viewportPosition.x,
			viewportPosition.y,
			viewportSize.width,
			viewportSize.height
		);

		context.globalCompositeOperation = oldCompositeOperation;
	}, "viewPort");
};

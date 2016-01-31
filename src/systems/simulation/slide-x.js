"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("slide-x", ["slideX", "position", "size"]);
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		if (game.entities.find("intro").length > 0 || game.entities.find("outro").length > 0) {
			return;
		}

		var camera = game.entities.find("camera")[0];
		var cameraPosition = game.entities.get(camera, "position");

		var position = game.entities.get(entity, "position");
		var size = game.entities.get(entity, "size");
		var mx = game.input.mouse.x + cameraPosition.x;
		var my = game.input.mouse.y + cameraPosition.y;
		var slideX = game.entities.get(entity, "slideX");
		var prevX = position.x;

		var inside = mx >= position.x
				&& mx < position.x + size.width
				&& my >= position.y
				&& my < position.y + size.height;

		if (game.input.buttonPressed("action") && inside) {
			slideX.offsetX = position.x - mx;
		} else if (game.input.button("action") && slideX.offsetX !== undefined) {
			position.x = mx + slideX.offsetX;
			if (position.x < slideX.min) {
				position.x = slideX.min;
				var leftScript = slideX.onLeft;
				if (prevX > slideX.min && leftScript) {
					var onLeft = game.require(leftScript);
					onLeft(entity, game);
				}
			}
			if (position.x > slideX.max) {
				position.x = slideX.max;
				var rightScript = slideX.onRight;
				if (prevX < slideX.max && rightScript) {
					var onRight = game.require(rightScript);
					onRight(entity, game);
				}
			}
		} else if (game.input.buttonReleased("action")) {
			delete slideX.offsetX;
		}
	}, "slide-x");
};

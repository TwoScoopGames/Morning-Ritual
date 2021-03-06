"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("drag-position", ["drag", "position", "size"]);
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
		var drag = game.entities.get(entity, "drag");

		var inside = mx >= position.x
				&& mx < position.x + size.width
				&& my >= position.y
				&& my < position.y + size.height;

		if (game.input.buttonPressed("action") && inside) {
			drag.offsetX = position.x - mx;
			drag.offsetY = position.y - my;
		} else if (game.input.button("action") && drag.offsetX !== undefined && drag.offsetY !== undefined) {
			position.x = mx + drag.offsetX;
			position.y = my + drag.offsetY;
		} else if (game.input.buttonReleased("action")) {
			delete drag.offsetX;
			delete drag.offsetY;
		}
	}, "drag-position");
};

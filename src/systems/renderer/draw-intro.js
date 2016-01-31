"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("draw-intro", ["intro", "position"]);
	ecs.addEach(function(entity, context) { // eslint-disable-line no-unused-vars
		var intro = game.entities.get(entity, "intro");
		var position = game.entities.get(entity, "position");
		context.font = "120px sans-serif";
		context.fillStyle = "green";
		context.fillText(intro, position.x, position.y);
	}, "draw-intro");
};

"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("draw-intro", ["intro", "position"]);
	ecs.addEach(function(entity, context) { // eslint-disable-line no-unused-vars
		var intro = game.entities.get(entity, "intro");
		var position = game.entities.get(entity, "position");
		context.fillStyle = "rgba(0,0,0,0.7)";
		context.fillRect(0,0,1536, 2048);
		context.font = "120px sans-serif";
		context.fillStyle = "white";
		context.fillText(intro, position.x, position.y);
	}, "draw-intro");
};

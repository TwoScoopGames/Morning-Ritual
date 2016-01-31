"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var timers = game.entities.get(entity, "timers");
	timers.unrotateFood.running = true;
	timers.unrotateFood.time = 0;
	game.entities.get(entity, "rotation").angle = 1.0;
	var foodCount = game.entities.find("catFood").length;
	var face = game.entities.find("catFace")[0];
	if (foodCount === 0) {
		game.instantiatePrefab("catFood1");
	} else if (foodCount === 1) {
		game.instantiatePrefab("catFood2");
		game.entities.get(face, "image").name = "feed-catFace2.png";
	} else if (foodCount === 2) {
		game.instantiatePrefab("catFood3");
		game.entities.get(face, "image").name = "feed-catFace3.png";
		game.entities.remove(face, "failure");
	}
};

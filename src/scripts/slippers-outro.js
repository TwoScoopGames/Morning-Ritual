"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.get(entity, "timers").outro.running = true;
	game.entities.set(entity, "outro", true);
	game.entities.find("failure").forEach(function() {
		game.sounds.play("Morning_Ritual_Feed_Dog.mp3");
		game.entities.get(8, "image").name = "slippers-left-slipper-bottom-loose.png";
		game.entities.get(9, "image").name = "slippers-left-slipper-top-loose.png";
		game.entities.get(11, "image").name = "slippers-right-slipper-bottom-loose.png";
		game.entities.get(12, "image").name = "slippers-right-slipper-top-loose.png";
	});
};

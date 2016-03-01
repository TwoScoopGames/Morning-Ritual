"use strict";

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	game.entities.get(entity, "timers").outro.running = true;
	game.entities.set(entity, "outro", true);
	game.entities.find("failure").forEach(function(id) {
		game.entities.get(id, "image").name = "feed-catFace4.png";
		game.sounds.play("Morning_Ritual_Cat_Food_3.mp3");
	});
};

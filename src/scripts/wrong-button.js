"use strict";

var sounds = [
	"radio-track-1",
	"radio-track-2",
	"radio-track-3",
	"radio-track-4",
	"radio-track-5"
];

var currentSounds = [];

function shuffle(o) {
	for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function getNextSound() {
	if (currentSounds.length === 0) {
		currentSounds = sounds.slice();
		shuffle(currentSounds);
	}
	return currentSounds.pop();
}
module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	console.log("wrong button");
	var image = game.entities.get(entity, "image");
	image.sourceX = 305;

	game.sounds.stop("alarm");
	game.sounds.stop("radio-track-1");
	game.sounds.stop("radio-track-2");
	game.sounds.stop("radio-track-3");
	game.sounds.stop("radio-track-4");
	game.sounds.stop("radio-track-5");
	game.sounds.play(getNextSound(), true);
};

"use strict";

var games = [
	"crack-eggs",
	"feed-cat"
];

function randomItem(array) {
	var i = Math.floor(Math.random() * (array.length + 1));
	return array[i];
}

module.exports = function(entity, game) { // eslint-disable-line no-unused-vars
	var failures = game.entities.find("failure").length > 0;
	console.log("is failure?", failures);
	game.switchScene(randomItem(games));
};

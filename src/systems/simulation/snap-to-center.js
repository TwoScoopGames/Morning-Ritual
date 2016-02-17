"use strict";

function center(start, length) {
	return start + Math.round(length / 2);
}

function distanceSquared(x1, y1, x2, y2) {
	var dx = x1 - x2;
	var dy = y1 - y2;
	return (dx * dx) + (dy * dy);
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
	game.entities.registerSearch("snap-to-center", ["snapToCenter", "position", "size"]);
	ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
		var position = game.entities.get(entity, "position");
		var size = game.entities.get(entity, "size");
		var snapToCenter = game.entities.get(entity, "snapToCenter");

		var targetPosition = game.entities.get(snapToCenter.target, "position");
		if (!targetPosition) {
			return;
		}
		var targetSize = game.entities.get(snapToCenter.target, "size");
		if (!targetSize) {
			return;
		}

		var cx = center(position.x, size.width);
		var cy = center(position.y, size.height);

		var tcx = center(targetPosition.x, targetSize.width);
		var tcy = center(targetPosition.y, targetSize.height);

		var d2 = distanceSquared(cx, cy, tcx, tcy);
		if (d2 <= snapToCenter.distance * snapToCenter.distance) {
			position.x = tcx - Math.round(size.width / 2);
			position.y = tcy - Math.round(size.height / 2);
			var snapScript = snapToCenter.onSnap;
			if (snapScript) {
				var onSnap = game.require(snapScript);
				onSnap(entity, game);
			}
		}
	}, "snap-to-center");
};

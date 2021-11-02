function isOnFood(x, y, z) {
	var i=0;
	//console.log("FOODLENGTH: " + foodBank.length);
	for (i = 0; i<foodBank.length; i++) {
		if(x==foodBank[i].getX() && y==foodBank[i].getY() && z==foodBank[i].getZ()) {
			return true;
		}
	}
	return false;
}

function isOnObstacle(x, y, z) {
	var i = 0;
	for (i = 0; i<obsBank.length; i++) {
		if(x==obsBank[i][0] && y==obsBank[i][1] && z==obsBank[i][2]) {
			return true;
		}
	}
  return false;
}

function isOnCorner(x, y, z) {
	var i=0;
	for (i = 0; i<24; i++) {
		if(x==boxCornerPlanes[i][0] && y==boxCornerPlanes[i][1] && z==boxCornerPlanes[i][2]) {
			//console.log("HELLOO " + boxCornerPlanes[i]);
			return true;
		}
	}
	return false;
}
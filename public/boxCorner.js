export function boxCorner(x,y,z) {
	this.x=x;
	this.y=y;
	this.z=z;
	this.getX = function() {
		return this.x;
	}
	this.getY = function() {
		return this.y;
	}
	this.getZ = function() {
		return this.z;
	}
	
	this.setX = function(x) {
		this.x=x;
	}
	this.setY = function(y) {
		this.y=y;
	}
	this.setZ = function(z) {
		this.z=z;
	}
}
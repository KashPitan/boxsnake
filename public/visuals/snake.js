var UP=1;
var RIGHT=2;
var LEFT=3;
var DOWN=4;

export class snakeObj {
  constructor() {
    this.body = [];
    this.bodyObj = [];
    this.bodyLength = 0;
    this.movementDirecrtion = RIGHT;


    this.getBody = function () {
      return this.body;
    };
    this.getbodyLength = function () {
      return this.bodyLength;
    };
    this.setbodyLength = function (len) {
      this.bodyLength = len;
    };
    this.addBody = function (x, y, z) {
      this.body.push(new section(x, y, z));


      var bodygeometry = new THREE.CubeGeometry(10, 10, 10);
      var bodymaterial = new THREE.MeshLambertMaterial({ color: "rgb(249, 81, 69)" });

      this.bodyObj.push(new THREE.Mesh(bodygeometry, bodymaterial));
      //console.log("Just added " + this.bodyObj[this.bodyObj.length-1]);
    };
    this.initialiseSnake = 	function(){
      snake.position.set(snakeX,snakeY,snakeZ);
    };
  }

}

class section {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.getX = function () {
      return this.x;
    };
    this.getY = function () {
      return this.y;
    };
    this.getZ = function () {
      return this.z;
    };

    this.setX = function (x) {
      this.x = x;
    };
    this.setY = function (y) {
      this.y = y;
    };
    this.setZ = function (z) {
      this.z = z;
    };
  }
}
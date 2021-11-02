// import {boxCorner} from '../visuals/boxCorner.js';

var FRONT=5;
var BACK=6;
var TOP=7;
var BOTTOM=8
var RIGHTSIDE=9;
var LEFTSIDE=10;

export class box {
  constructor() {
    this.corners = this.setCorners();
    this.boxMaterial = new THREE.MeshLambertMaterial({color: "rgb(20,100,200)"});//??
    this.boxPlane = FRONT;// initial plane set to front plane

    //corner planes?
    this.cornerPlanes = this.setCornerPlanes();

    this.bCorner = new THREE.CubeGeometry(13,13,13);

    this.boxGeometry = new THREE.CubeGeometry(180,180,180);
    this.boxMaterial = new THREE.MeshLambertMaterial({color: "rgb(70,230,130)",  map: THREE.ImageUtils.loadTexture('Textures/directionArrow.png')});
    this.box = new THREE.Mesh(boxGeometry, boxMaterial);

    //still have no idea what these do? the box size?
    this.scaled = 85;
    this.scaleu = 95;

    this.setCorners = function(){
      return [
        new boxCorner(scaled+0.5,scaled+0.5,scaled+0.5),
        new boxCorner(scaled+0.5,-scaled-0.5,-scaled-0.5),
        new boxCorner(scaled+0.5,scaled+0.5,-scaled-0.5),
        new boxCorner(scaled+0.5,-scaled-0.5,scaled+0.5),
        new boxCorner(-scaled-0.5,scaled+0.5,scaled+0.5),
        new boxCorner(-scaled-0.5,-scaled-0.5,-scaled-0.5),
        new boxCorner(-scaled-0.5,scaled+0.5,-scaled-0.5),
        new boxCorner(-scaled-0.5,-scaled-0.5,scaled+0.5)
      ]
    };

    this.setCornerPlanes = function(){
      return {
        frontPlane: [[scaled,scaled,scaleu],[scaled,-scaled,scaleu],[-scaled,scaled,scaleu],[-scaled,-scaled,scaleu]],
        topPlane: [[scaled,scaleu,scaled],[scaled,scaleu,-scaled],[-scaled,scaleu,scaled],[-scaled,scaleu,-scaled]],
        rightPlane: [[scaleu,scaled,scaled],[scaleu,-scaled,scaled],[scaleu,scaled,-scaled],[scaleu,-scaled,-scaled]],
        leftPlane : [[-scaleu,scaled,scaled],[-scaleu,-scaled,scaled],[-scaleu,scaled,-scaled],[-scaleu,-scaled,-scaled]],
        backPlane: [[scaled,scaled,-scaleu],[-scaled,scaled,-scaleu],[scaled,-scaled,-scaleu],[-scaled,-scaled,-scaleu]],
        bottomPlane: [[scaled,-scaleu,scaled],[scaled,-scaleu,-scaled],[-scaled,-scaleu,scaled],[-scaled,-scaleu,-scaled]]
      }
    };

    this.initialiseBox = function(){
        this.box.position.set(0,0,0);
        this.corners[0].position.set(b0.getX(),b0.getY(),b0.getZ());
        this.corners[1].position.set(b1.getX(),b1.getY(),b1.getZ());
        this.corners[2].position.set(b2.getX(),b2.getY(),b2.getZ());
        this.corners[3].position.set(b3.getX(),b3.getY(),b3.getZ());
        this.corners[4].position.set(b4.getX(),b4.getY(),b4.getZ());
        this.corners[5].position.set(b5.getX(),b5.getY(),b5.getZ());
        this.corners[6].position.set(b6.getX(),b6.getY(),b6.getZ());
        this.corners[7].position.set(b7.getX(),b7.getY(),b7.getZ());
    };
  }
}

class boxCorner {
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
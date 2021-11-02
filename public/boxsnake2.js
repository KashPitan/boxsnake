import {THREEbox,THREEboxgeometry,THREEboxmaterial} from './visuals/test.js';
import {boxCorner} from './visuals/boxCorner.js';
import {rendererSetup,cameraSetup,sceneSetup,plightsSetup} from './visuals/setup.js';
import {snakeObj} from './visuals/snake.js';

var renderer = rendererSetup;

var camera = cameraSetup;
var scene = sceneSetup;

var plights = plightsSetup;

//snake variables
var snakeSpeed=2;

var snakegeometry = new THREE.CubeGeometry(11,11,11);
var snakematerial = new THREE.MeshLambertMaterial({color: "rgb(222, 40, 80)"});
var snake = new THREE.Mesh(snakegeometry, snakematerial);

//spec variables
var specgeometry = new THREE.CubeGeometry(10,10,10);
var specmaterial = new THREE.MeshLambertMaterial({color: "rgb(210,90,210)"});
var spec = new THREE.Mesh(specgeometry, specmaterial);

//box variables
var boxgeometry = THREEboxgeometry;//is this needed?
var boxmaterial = THREEboxmaterial;
var box = THREEbox;

//snake coordds
var snakeX = -5;
var snakeY = 45;
var snakeZ = 95;

var snakey = new snakeObj();

//initial snake movement direction
var snakeDir = RIGHT;

//box plane constants
var FRONT=5;
var BACK=6;
var TOP=7;
var BOTTOM=8
var RIGHTSIDE=9;
var LEFTSIDE=10;

//initial box plane
var boxPlane = FRONT;

//set up box planes
var scaled = 85;
var scaleu = 95;

// //FRONT
var bp0 = [scaled,scaled,scaleu];
var bp1 = [scaled,-scaled,scaleu];
var bp2 = [-scaled,scaled,scaleu];
var bp3 = [-scaled,-scaled,scaleu];

// //TOP
var bp4 = [scaled,scaleu,scaled];
var bp5 = [scaled,scaleu,-scaled];
var bp6 = [-scaled,scaleu,scaled];
var bp7 = [-scaled,scaleu,-scaled];

// //RIGHTSIDE
var bp8 = [scaleu,scaled,scaled];
var bp9 = [scaleu,-scaled,scaled];
var bp10 = [scaleu,scaled,-scaled];
var bp11 = [scaleu,-scaled,-scaled];

//LEFTSIDE
var bp12 = [-scaleu,scaled,scaled];
var bp13 = [-scaleu,-scaled,scaled];
var bp14 = [-scaleu,scaled,-scaled];
var bp15 = [-scaleu,-scaled,-scaled];

//BACK
var bp16 = [scaled,scaled,-scaleu];
var bp17 = [-scaled,scaled,-scaleu];
var bp18 = [scaled,-scaled,-scaleu];
var bp19 = [-scaled,-scaled,-scaleu];

//BOTTOM
var bp20 = [scaled,-scaleu,scaled];
var bp21 = [scaled,-scaleu,-scaled];
var bp22 = [-scaled,-scaleu,scaled];
var bp23 = [-scaled,-scaleu,-scaled];

var boxCornerPlanes = [bp0,bp1,bp2,bp3,
					bp4,bp5,bp6,bp7,
					bp8,bp9,bp10,bp11,
					bp12,bp13,bp14,bp15,
					bp16,bp17,bp18,bp19,
          bp20,bp21,bp22,bp23]

var b0 = new boxCorner(scaled+0.5,scaled+0.5,scaled+0.5);
var b1 = new boxCorner(scaled+0.5,-scaled-0.5,-scaled-0.5);
var b2 = new boxCorner(scaled+0.5,scaled+0.5,-scaled-0.5);
var b3 = new boxCorner(scaled+0.5,-scaled-0.5,scaled+0.5);
var b4 = new boxCorner(-scaled-0.5,scaled+0.5,scaled+0.5);
var b5 = new boxCorner(-scaled-0.5,-scaled-0.5,-scaled-0.5);
var b6 = new boxCorner(-scaled-0.5,scaled+0.5,-scaled-0.5);
var b7 = new boxCorner(-scaled-0.5,-scaled-0.5,scaled+0.5);

var boxmaterial = new THREE.MeshLambertMaterial({color: "rgb(20,100,200)"});
var bCorner = new THREE.CubeGeometry(13,13,13);
	
var bC0 = new THREE.Mesh(bCorner, boxmaterial);
var bC1 = new THREE.Mesh(bCorner, boxmaterial);
var bC2 = new THREE.Mesh(bCorner, boxmaterial);
var bC3 = new THREE.Mesh(bCorner, boxmaterial);
var bC4 = new THREE.Mesh(bCorner, boxmaterial);
var bC5 = new THREE.Mesh(bCorner, boxmaterial);
var bC6 = new THREE.Mesh(bCorner, boxmaterial);
var bC7 = new THREE.Mesh(bCorner, boxmaterial);

function initialiseBox() {
	box.position.set(0,0,0);
	bC0.position.set(b0.getX(),b0.getY(),b0.getZ());
	bC1.position.set(b1.getX(),b1.getY(),b1.getZ());
	bC2.position.set(b2.getX(),b2.getY(),b2.getZ());
	bC3.position.set(b3.getX(),b3.getY(),b3.getZ());
	bC4.position.set(b4.getX(),b4.getY(),b4.getZ());
	bC5.position.set(b5.getX(),b5.getY(),b5.getZ());
	bC6.position.set(b6.getX(),b6.getY(),b6.getZ());
	bC7.position.set(b7.getX(),b7.getY(),b7.getZ());
}

function prepareCorners() {
	scene.add(bC0);
	scene.add(bC1);
	scene.add(bC2);
	scene.add(bC3);
	scene.add(bC4);
	scene.add(bC5);
	scene.add(bC6);
	scene.add(bC7);
}

function transformCamera() {
	camera.position.set(0,0,580);
}

function transformLights() {

  plights[0].position.set(0,180,180);
	plights[1].position.set(0,180,0);
	plights[2].position.set(-180,0,-0);
	plights[3].position.set(180,0,0);
  plights[4].position.set(0,-180,0);

}

function initialiseScene() {
	scene.add(box);
	// addFood();
	// addObstacles();
	scene.add(spec);
	scene.add(snake);
	scene.rotation.x= 0;
	scene.rotation.y= 0;
}

function initialiseSpec() {
	spec.position.set(0,0,0);
}

function initialiseSnake() {
	snake.position.set(snakeX,snakeY,snakeZ);
}

var count=8;
var anim=0;
var animate;
var purp = 70;
var animSpeed=1;
var purp2=81;

function animateSnake() {
	
	if (anim<10) {
		if (purp>255) {
			animSpeed*=-1;
		}
		purp+=40*animSpeed;
		purp2-=animSpeed*10;
		for (i = 0; i<snakey.body.length; i++) {
			snakey.bodyObj[i].material = new THREE.MeshLambertMaterial({color: "rgb(249, " + purp2 + ", "+ purp + ")"});
		}
		animate = setTimeout(animateSnake, 100);
		//console.log(anim +  "pr: " +  purp);
		anim++;
	}
	else {
		clearTimeout(animate);
	}
}

function renderScene() {
	
	transformLights();
	transformCamera();
	// manageGameStates();
	// if (gameStarted) {
		// updateCurrentSide();
		// updateSnake();
		// updateFood();
		// updateSpecFood();
		// moveSnake();
		// trail();
	// }
	// updateCamera()
	snakey.body=[];
	snakey.bodyObj=[];
  initialiseBox();
  prepareCorners();
  initialiseScene();
  initialiseSpec();


	renderer.render(scene, camera);
	requestAnimationFrame(renderScene);
}

// genOriginalFoodLoc();
// prepareCorners();
// // genOriginalObsLoc();
// initialiseScene();
// initialiseSpec();

renderScene();

//what does this do?
// requestAnimationFrame(renderScene);

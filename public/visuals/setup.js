var rendererSetup = new THREE.WebGLRenderer({canvas: document.getElementById('sceneWindow'), antialias: true});

//background colour
rendererSetup.setClearColor("rgb(70, 200, 211)");
rendererSetup.setPixelRatio(window.devicePixelRatio);
rendererSetup.setSize(window.innerWidth, window.innerHeight);

var cameraSetup = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 1000);
var sceneSetup = new THREE.Scene();

var alight = new THREE.AmbientLight("rgb(195,190,201)", 0.85);
sceneSetup.add(alight);

var plight = new THREE.PointLight("rgb(255,255,255)", 0.7);
sceneSetup.add(plight);

var plight1 = new THREE.PointLight("rgb(255,255,255)", 0.5);
sceneSetup.add(plight1);

var plight2 = new THREE.PointLight("rgb(255,255,255)", 0.4);
sceneSetup.add(plight2);

var plight3 = new THREE.PointLight("rgb(255,255,255)", 0.8);
sceneSetup.add(plight3);

var plight4 = new THREE.PointLight("rgb(255,255,255)", 0.5);
sceneSetup.add(plight4);

var plightsSetup = [plight,plight1,plight2,plight3,plight4]

export {rendererSetup,cameraSetup,sceneSetup, plightsSetup}
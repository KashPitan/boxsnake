var THREEboxgeometry = new THREE.CubeGeometry(180,180,180);
var THREEboxmaterial = new THREE.MeshLambertMaterial({color: "rgb(70,230,130)",  map: THREE.ImageUtils.loadTexture('Textures/directionArrow.png')});
var THREEbox = new THREE.Mesh(THREEboxgeometry, THREEboxmaterial);

export {THREEbox,THREEboxgeometry,THREEboxmaterial}
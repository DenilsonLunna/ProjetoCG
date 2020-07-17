
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 50;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;


window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
  
    camera.updateProjectionMatrix();
  });


// Criando grid de ajuda
var size = 10;
var divisions = 10;
var gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );



var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 5.0);
keyLight.position.set(0, 1, -1);



scene.add(keyLight);


var loader = new THREE.GLTFLoader();
loader.load("./assets/teste02.glb",handle_load);

var mesh;

function handle_load(gltf){
    scene.add( gltf.scene );
    scene.add(mesh);
    
   
}
var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();
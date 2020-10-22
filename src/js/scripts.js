import {gridHelper, axisHelper} from './helper.js';
import {loadFile} from './load_manager.js';

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 50;

//var renderer = new THREE.WebGLRenderer();


var drawingSurface = document.getElementById( 'canvas' );
var renderer = new THREE.WebGLRenderer( { antialias: true, canvas: drawingSurface } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth/2, window.innerHeight/2 );


// Logica de orbitar sobre objeto, padrão da lib THREE.js
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.2;
controls.enableZoom = true;


//evento para redimensionamento dinâmico do canvas
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    camera.aspect = window.innerWidth / window.innerHeight;
  
    camera.updateProjectionMatrix();
  });




//criando grid de ajuda
scene.add(gridHelper(10,10));

scene.add(axisHelper(20));



var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 5.0);
keyLight.position.set(0, 1, -1);



scene.add(keyLight);


/*var loader = new THREE.GLTFLoader();
console.log(loadFile());
loader.load("./assets/teste02.glb",handle_load);

var mesh;

function handle_load(gltf){
    scene.add( gltf.scene );
    scene.add(mesh);
    
   
}*/
document.querySelector("#file").onchange = e =>  {
  let file = e.target.files[ 0 ];
  let reader = new FileReader();
  reader.readAsArrayBuffer( file );
  reader.onload = gltfText => {
      let loader = new THREE.GLTFLoader();
      loader.parse( gltfText.target.result, '', (gltf) => {
          scene.add(gltf.scene)
      }, 
      errMassage => { console.error(errMassage) } )
  }
}
var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();
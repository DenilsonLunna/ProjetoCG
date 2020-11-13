import {gridHelper, axisHelper} from './helpers.js';

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

//criando eixos 
scene.add(axisHelper(20));



var keyLight = new THREE.AmbientLight( 0xffffff  );
//keyLight.position.set(0, 1, -1);
scene.add(keyLight);

var mesh; 
//Load de arquivo por meio do input file
document.querySelector("#file").onchange = e =>  {
  let file = e.target.files[ 0 ];
  let reader = new FileReader();
  reader.readAsArrayBuffer( file );
  reader.onload = gltfText => {
      let loader = new THREE.GLTFLoader();
      loader.parse( gltfText.target.result,'', (gltf) => {  
          mesh = gltf.scene;
          scene.add(gltf.scene);
        
          
          renderer.render( scene, camera );
      }, 
      errMassage => { console.error(errMassage) } )
  }
}

//Events Key
function keyPressed(e){
  switch(e.key) {
    case 'ArrowUp':
        mesh.position.y += 1;
        
        break;
    case 'ArrowDown':
      mesh.position.y -= 1;
        break;
    case 'ArrowLeft':
      mesh.position.x -= 1;
        break;
    case 'ArrowRight':
      mesh.position.x += 1;
        break;
  }
  e.preventDefault();
  
}

document.body.addEventListener('keydown', keyPressed);

var update = function () {
	requestAnimationFrame( update );
  controls.update();
  
  
	renderer.render(scene, camera);
};

update();
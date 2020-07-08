var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});
var light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 0, 25);


//======================================================================== Objetos==========================================
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({ color: 0xffcc00 });
var mesh = new THREE.Mesh(geometry, material);
//==================================================================================================================

scene.add(mesh);
scene.add(light);



var render = function () {
  // essa função faz com que os objetos não se deformem quando a tela mudar de tamanho
  requestAnimationFrame(render);
  update();

  renderer.render(scene, camera);
};
render();



//======================================================================== Update ==========================================
function update() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
}
//==================================================================================================================

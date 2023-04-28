// Se define geometría de la pirámide
var geometry = new THREE.BufferGeometry();

// Se definen los vértices de la pirámide
var vertices = new Float32Array([
  // Triángulo base
  -1, 0, -1,
  1, 0, -1,
  1, 0, 1,
  -1, 0, 1,
  // Vértice superior
  0, 1, 0
]);

// Se definen los índices de los triángulos de la pirámide
var indices = new Uint16Array([
  0, 1, 2, // Cara 1
  0, 2, 3, // Cara 2
  0, 4, 1, // Cara 3
  1, 4, 2, // Cara 4
  2, 4, 3, // Cara 5
  3, 4, 0  // Cara 6
]);

// Se agregan los vértices e índices a la geometría
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setIndex(new THREE.BufferAttribute(indices, 1));

//  material
var material = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
var material2 = new THREE.MeshBasicMaterial({ color: 0x0000FF });
//  malla de la pirámide
var pyramid = new THREE.Mesh(geometry, material);
var pyramid2 = new THREE.Mesh(geometry, material2);

//  escena y agregar la malla de la pirámide
var scene = new THREE.Scene();
scene.add(pyramid);
scene.add(pyramid2);

// Se crea la cámara de perspectiva
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 2;
camera.position.x = 0;

// Se crea el renderizador 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Función para animar la escena
function animate() {
  requestAnimationFrame(animate);

  // Rotar la pirámide sobre el eje Y
 // pyramid.rotation.y += 0.01;
  pyramid.position.x = -3;
  pyramid2.position.x = 4;
  pyramid.position.y = 3;
  pyramid2.position.y = 1;
  // Renderizar la escena con la cámara actual
  renderer.render(scene, camera);
}

// Iniciar la animación
animate();

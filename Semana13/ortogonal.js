// Crear geometría de la pirámide
var geometry = new THREE.BufferGeometry();

// Definir los vértices de la pirámide
var vertices = new Float32Array([
  // Triángulo base
  -1, 0, -1,
  1, 0, -1,
  1, 0, 1,
  -1, 0, 1,
  // Vértice superior
  0, 1, 0
]);

// Definir los índices de los triángulos de la pirámide
var indices = new Uint16Array([
  0, 1, 2, // Cara 1
  0, 2, 3, // Cara 2
  0, 4, 1, // Cara 3
  1, 4, 2, // Cara 4
  2, 4, 3, // Cara 5
  3, 4, 0  // Cara 6
]);

// Agregar los vértices e índices a la geometría
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometry.setIndex(new THREE.BufferAttribute(indices, 1));

// Crear material
var material = new THREE.MeshBasicMaterial({ color: 0x00FFFF });

// Crear malla de la pirámide
var pyramid = new THREE.Mesh(geometry, material);
var scene = new THREE.Scene();
scene.add(pyramid);

// Crear cámara ortográfica
var camera = new THREE.OrthographicCamera(window.innerWidth / -100, window.innerWidth / 100, window.innerHeight / 100, window.innerHeight / -100, 0.1, 100);
camera.position.z = 5;
camera.position.y = 2;

// Crear renderizador y añadir a DOM
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Función para animar la escena
function animate() {
requestAnimationFrame(animate);

// Rotar la pirámide sobre el eje Y
pyramid.rotation.y += 0.01;

// Renderizar la escena con la cámara actual
renderer.render(scene, camera);
}

// Iniciar la animación
animate();

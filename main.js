import * as THREE from "three";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"

// Scene
const scene = new THREE.Scene();

const y_bias = -5;
// Add a cube to the scene

var viewText = 'Store';

// Create a canvas element to render the text onto
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.font = 'Bold 100px Arial';
context.fillStyle = 'white';
context.fillText(viewText, 10, 80); // adjust the position based on your needs

// Create a texture from the canvas
var texture = new THREE.CanvasTexture(canvas);

// Create a material for the text
var textMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: true
});

// Create a plane geometry to display the text
var textGeometry = new THREE.PlaneGeometry(4, 3);

// Create a mesh for the text
var textMesh = new THREE.Mesh(textGeometry, textMaterial);

// Position and rotate the mesh to attach it to the cube
textMesh.position.set(26, 5, 2); // position relative to center of cube
textMesh.rotation.z = -Math.PI / 2; // rotate to face upwards
// Add both the cube and the text to the scene
scene.add(textMesh);

var viewText = 'Middelware';

// Create a canvas element to render the text onto
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.font = 'Bold 55px Arial';
context.fillStyle = 'white';
context.fillText(viewText, 0, 80); // adjust the position based on your needs

// Create a texture from the canvas
var texture = new THREE.CanvasTexture(canvas);

// Create a material for the text
var textMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: true
});

// Create a plane geometry to display the text
var textGeometry = new THREE.PlaneGeometry(4, 3);

// Create a mesh for the text
var textMesh = new THREE.Mesh(textGeometry, textMaterial);

// Position and rotate the mesh to attach it to the cube
textMesh.position.set(19.9, 10, 3); // position relative to center of cube
// Add both the cube and the text to the scene
scene.add(textMesh);

var viewText = 'Dispatcher';

// Create a canvas element to render the text onto
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.font = 'Bold 55px Arial';
context.fillStyle = 'white';
context.fillText(viewText, 10, 80); // adjust the position based on your needs

// Create a texture from the canvas
var texture = new THREE.CanvasTexture(canvas);

// Create a material for the text
var textMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: true
});

// Create a plane geometry to display the text
var textGeometry = new THREE.PlaneGeometry(4, 3);

// Create a mesh for the text
var textMesh = new THREE.Mesh(textGeometry, textMaterial);

// Position and rotate the mesh to attach it to the cube
textMesh.position.set(20, 7.5, 3); // position relative to center of cube
// Add both the cube and the text to the scene
scene.add(textMesh);

var viewText = 'Action';

// Create a canvas element to render the text onto
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.font = 'Bold 90px Arial';
context.fillStyle = 'white';
context.fillText(viewText, 10, 80); // adjust the position based on your needs

// Create a texture from the canvas
var texture = new THREE.CanvasTexture(canvas);

// Create a material for the text
var textMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: true
});

// Create a plane geometry to display the text
var textGeometry = new THREE.PlaneGeometry(5, 3);

// Create a mesh for the text
var textMesh = new THREE.Mesh(textGeometry, textMaterial);

// Position and rotate the mesh to attach it to the cube
textMesh.position.set(-19.8, -5, 2); // position relative to center of cube
// textMesh.rotation.x = -Math.PI / 6; // rotate to face upwards
// Add both the cube and the text to the scene
scene.add(textMesh);

const actionGeometry = new THREE.BoxGeometry(7, 5, 2); // width, height, depth
const actionMaterial = new THREE.MeshLambertMaterial({ color: 0x00ffff });
const actionMesh = new THREE.Mesh(actionGeometry, actionMaterial);
actionMesh.position.set(-20, 0 + y_bias, 0);
scene.add(actionMesh);
var apitext = 'API';

// Create a canvas element to render the text onto
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.font = 'Bold 100px Arial';
context.fillStyle = 'white';
context.fillText(apitext, 10, 80); // adjust the position based on your needs

// Create a texture from the canvas
var texture = new THREE.CanvasTexture(canvas);

// Create a material for the text
var textMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: true
});

// Create a plane geometry to display the text
var textGeometry = new THREE.PlaneGeometry(4, 3);

// Create a mesh for the text
var textMesh = new THREE.Mesh(textGeometry, textMaterial);

// Position and rotate the mesh to attach it to the cube
textMesh.position.set(4, 8.5, 2); // position relative to center of cube
// textMesh.rotation.x = -Math.PI / 6; // rotate to face upwards
// Add both the cube and the text to the scene
scene.add(textMesh);

const viewGeometry = new THREE.BoxGeometry(10, 5, 2); // width, height, depth
const viewMaterial = new THREE.MeshLambertMaterial({ color: 0x33cc33 });
const viewMesh = new THREE.Mesh(viewGeometry, viewMaterial);
viewMesh.position.set(0, -15 + y_bias, 0);
scene.add(viewMesh);
var viewText = 'View';

// Create a canvas element to render the text onto
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.font = 'Bold 100px Arial';
context.fillStyle = 'white';
context.fillText(viewText, 10, 80); // adjust the position based on your needs

// Create a texture from the canvas
var texture = new THREE.CanvasTexture(canvas);

// Create a material for the text
var textMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: true
});

// Create a plane geometry to display the text
var textGeometry = new THREE.PlaneGeometry(4, 3);

// Create a mesh for the text
var textMesh = new THREE.Mesh(textGeometry, textMaterial);

// Position and rotate the mesh to attach it to the cube
textMesh.position.set(1, -20.3, 2); // position relative to center of cube
// textMesh.rotation.x = -Math.PI / 6; // rotate to face upwards
// Add both the cube and the text to the scene
scene.add(textMesh);

const stateGeometry = new THREE.BoxGeometry(10, 5, 2); // width, height, depth
const stateMaterial = new THREE.MeshLambertMaterial({ color: 0xee9900 });
const stateMesh = new THREE.Mesh(stateGeometry, stateMaterial);
stateMesh.position.set(20, -7 + y_bias, 1);
scene.add(stateMesh);

var viewText = 'State';

// Create a canvas element to render the text onto
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.font = 'Bold 100px Arial';
context.fillStyle = 'white';
context.fillText(viewText, 10, 80); // adjust the position based on your needs

// Create a texture from the canvas
var texture = new THREE.CanvasTexture(canvas);

// Create a material for the text
var textMaterial = new THREE.MeshBasicMaterial({
  map: texture,
  transparent: true
});

// Create a plane geometry to display the text
var textGeometry = new THREE.PlaneGeometry(4, 3);

// Create a mesh for the text
var textMesh = new THREE.Mesh(textGeometry, textMaterial);

// Position and rotate the mesh to attach it to the cube
textMesh.position.set(20.5, -12.5 , 3); // position relative to center of cube
// textMesh.rotation.x = -Math.PI / 6; // rotate to face upwards
// Add both the cube and the text to the scene
scene.add(textMesh);

const storeGeometry = new THREE.BoxGeometry(15, 20, 2); // width, height, depth
const storeMaterial = new THREE.MeshLambertMaterial({ color: 0xcccc00 });
const storeMesh = new THREE.Mesh(storeGeometry, storeMaterial);
storeMesh.position.set(20, 3 + y_bias, 0);
scene.add(storeMesh);

const apiGeometry = new THREE.BoxGeometry(7, 4, 2); // width, height, depth
const apiMaterial = new THREE.MeshLambertMaterial({ color: 0xee9900 });
const apiMesh = new THREE.Mesh(apiGeometry, apiMaterial);
apiMesh.position.set(3, 14 + y_bias, 0);
scene.add(apiMesh);

const middlewareGeometry = new THREE.BoxGeometry(10, 5, 2); // width, height, depth
const middlewareMaterial = new THREE.MeshLambertMaterial({ color: 0xee9900 });
const middlewareMesh = new THREE.Mesh(middlewareGeometry, middlewareMaterial);
middlewareMesh.position.set(20, 14 + y_bias, 1);
scene.add(middlewareMesh);

// Set up lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(10, 50, 0); // x, y, z
scene.add(directionalLight);

// Camera
const width = 100;
const height = width * (window.innerHeight / window.innerWidth);
const camera = new THREE.OrthographicCamera(
  width / -2, // left
  width / 2, // right
  height / 2, // top
  height / -2, // bottom
  1, // near
  100 // far
);

camera.position.set(10, 10, 40);
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Add it to HTML
document.body.appendChild(renderer.domElement);
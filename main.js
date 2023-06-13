import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"


// Scene
const scene = new THREE.Scene();

const loader = new THREE.TextureLoader();

// load a texture
loader.load(
  // resource URL
  './static/2.png',

  // onLoad callback
  function (texture) {
    // set the background to the loaded texture
    scene.background = texture;
  },

  // onProgress callback currently not supported
  undefined,

  // onError callback
  function (err) {
    console.error('An error happened.');
  }
);

var viewText = 'Redux WorkFlow';

// Create a canvas element to render the text onto
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.font = 'Bold 35px Arial';
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
var textGeometry = new THREE.PlaneGeometry(40, 30);

// Create a mesh for the text
var textMesh = new THREE.Mesh(textGeometry, textMaterial);

// Position and rotate the mesh to attach it to the cube
textMesh.position.set(0, 18, 0); // position relative to center of cube
// textMesh.rotation.x = - Math.PI / 6
textMesh.rotation.z =  Math.PI / 90
// textMesh.rotation.y =  Math.PI / 4
// Add both the cube and the text to the scene
scene.add(textMesh);

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

var viewText = 'Reducer';

// Create a canvas element to render the text onto
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.font = 'Bold 70px Arial';
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
textMesh.position.set(20, 2, 2); // position relative to center of cube
// textMesh.rotation.z = -Math.PI / 2; // rotate to face upwards
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

var viewText = 'R';

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
var textMesh1 = new THREE.Mesh(textGeometry, textMaterial);

// Position and rotate the mesh to attach it to the cube
textMesh1.position.set(20.7, -0.7, 1.3); // position relative to center of cube
// Add both the cube and the text to the scene
var textMesh2 = new THREE.Mesh(textGeometry, textMaterial)
textMesh2.position.set(23.7, -2.8, 1.4)

var textMesh3 = new THREE.Mesh(textGeometry, textMaterial)
textMesh3.position.set(19.7, -4.2, 1.3)
scene.add(textMesh1, textMesh2, textMesh3);

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

const reducerGeometry = new THREE.BoxGeometry(8, 10, 0.2);
const redurcerMaterial = new THREE.MeshLambertMaterial({color: 0x00dd33})
const reducerMesh = new THREE.Mesh(reducerGeometry, redurcerMaterial)
reducerMesh.position.set(20, 3.5 + y_bias, 1.1)

scene.add(reducerMesh)

var rGeometry = new THREE.BoxGeometry(1.5, 1.5, 0.1)
var rMaterial = new THREE.MeshLambertMaterial({color: 0x00aa00})
var rMesh1 = new THREE.Mesh(rGeometry, rMaterial)
rMesh1.position.set(19, 4.5 + y_bias, 1.18)
var rMesh2 = new THREE.Mesh(rGeometry, rMaterial)
rMesh2.position.set(22, 2.5 + y_bias, 1.18)
var rMesh3 = new THREE.Mesh(rGeometry, rMaterial)
rMesh3.position.set(18, 1 + y_bias, 1.18)
scene.add(rMesh1, rMesh2, rMesh3)

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
const renderer = new THREE.WebGLRenderer({ antialias: true });

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();
const material = new THREE.LineBasicMaterial( {
	color: 0xdd0000,
	linewidth: 3.5,
	linecap: 'round', //ignored by WebGLRenderer
	linejoin:  'round' //ignored by WebGLRenderer
} );
const points1 = [];
points1.push( new THREE.Vector3( - 20, -2.5, 0 ) );
points1.push( new THREE.Vector3( -20, 12.5, 0 ) );
points1.push( new THREE.Vector3( 20, 14, 0 ) );
points1.push( new THREE.Vector3( 20, 11, 0 ) );

const geometry1 = new THREE.BufferGeometry().setFromPoints( points1 );
const line1 = new THREE.Line( geometry1, material );
scene.add( line1 );

const points2 = [];
points2.push( new THREE.Vector3( 5, 10.5, 0 ) );
points2.push( new THREE.Vector3( 15, 10.7, 0 ) );

const geometry2 = new THREE.BufferGeometry().setFromPoints( points2 );
const line2 = new THREE.Line( geometry2, material );
scene.add( line2 );

const points3 = [];
points3.push( new THREE.Vector3( 5, 8.7, 0 ) );
points3.push( new THREE.Vector3( 15, 8.9, 0 ) );

const geometry3 = new THREE.BufferGeometry().setFromPoints( points3 );
const line3 = new THREE.Line( geometry3, material );
scene.add( line3 );

const points4 = [];
points4.push( new THREE.Vector3( -20, -7, 0 ) );
points4.push( new THREE.Vector3( -20, -20, 0 ) );
points4.push( new THREE.Vector3( 0, -19.8, 0 ) );

const geometry4 = new THREE.BufferGeometry().setFromPoints( points4 );
const line4 = new THREE.Line( geometry4, material );
scene.add( line4 );

const points5 = [];
points5.push( new THREE.Vector3( 4, -19.8, 0 ) );
points5.push( new THREE.Vector3( 20, -19.7, 0 ) );
points5.push( new THREE.Vector3( 20, -14, 0 ) );

const geometry5 = new THREE.BufferGeometry().setFromPoints( points5 );
const line5 = new THREE.Line( geometry5, material );
scene.add( line5 );

const points6 = [];
points6.push( new THREE.Vector3( 20, -5, 1.15 ) );
points6.push( new THREE.Vector3( 20, -10, 1.15 ) );

const geometry6 = new THREE.BufferGeometry().setFromPoints( points6 );
const line6 = new THREE.Line( geometry6, material );
scene.add( line6 );

const points7 = [];
points7.push( new THREE.Vector3( 20, 7, 1.15 ) );
points7.push( new THREE.Vector3( 20, 3, 1.15 ) );

const geometry7 = new THREE.BufferGeometry().setFromPoints( points7 );
const line7 = new THREE.Line( geometry7, material );
scene.add( line7 );

const points8 = [];
points8.push( new THREE.Vector3( 15, -11, 1.15 ) );
points8.push( new THREE.Vector3( 13.5, -11, 1.15 ) );
points8.push( new THREE.Vector3( 13.5, 5, 1.15 ) );
points8.push( new THREE.Vector3( 18, 5, 1.15 ) );
points8.push( new THREE.Vector3( 18, 3, 1.15 ) );

const geometry8 = new THREE.BufferGeometry().setFromPoints( points8 );
const line8 = new THREE.Line( geometry8, material );
scene.add( line8 );


// Renderer
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
function animate() {
  requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );
}

animate()
import kaboom from "kaboom";

// First we want to initialize kaboom library
kaboom();

// Set kaboom config
kaboom({
  width: 500,
  height: 500,
  //   scale: 0.5,
  //   stretch: true,
  //   letterbox: true,
  //   debug: true,
  font: 'sinko',
  canvas: document.querySelector('#canvas'),
  background: [0, 0, 255],
  //   global: true,
  //   fullscreen: true,
  //   scale: 2,
  //   debug: true,
  //   clearColor: [1, 0.65, 0, 1],
});

// Then we can use it
add([
    text("This is Keuda"),
    pos(0, 80),
]);

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let i = 0; i < 10; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let rocket = new rocket(x, 0, z);
  }

  for(let i = 0; i < 10; i++){
    let x = rnd(-20,20);
    let y = rnd(8,15);
    let z = rnd(-20,20);
    let UFO = new UFO(x, 0, z);
  }
});
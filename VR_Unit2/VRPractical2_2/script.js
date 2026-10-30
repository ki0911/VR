let car, pokemonball, rocket, dude, sun;

window.addEventListener("DOMContentLoaded",function() {
  car = document.querySelector("#car");
  pokemonball = document.querySelector("#pokemonball");
  rocket = document.querySelector("#rocket");
  dude = document.querySelector("#dude");
  sun = document.querySelector("#sun");

  car.x = 0;
  car.dx = -0.1;

  pokemonball.a = 0;
  pokemonball.da = 1;

  rocket.y = 1;
  rocket.dy = 0.01;

  dude.a = 1;
  dude.da = 0.005;

  sun.a = 0;
  sun.da = 0.005;

  loop();
});

function loop() {
  car.x += car.dx;
  car.setAttribute("position", {x: car.x, y: 0, z: -8});

  pokemonball.a += pokemonball.da;
  pokemonball.setAttribute("rotation", {x: pokemonball.a, y: 0, z: 0});

  rocket.y += rocket.dy;
  rocket.setAttribute("position", {x: 3, y: rocket.y, z: -4});

  if (dude.a < 2) {
    dude.a += dude.da;
    dude.setAttribute("scale", {x: dude.a, y: dude.a, z: dude.a});
  }

  if (sun.a < 1) {
    sun.a += sun.da;
    sun.setAttribute("material", "opacity", sun.a);
  }

  window.requestAnimationFrame(loop);
}
    

let scene,mech=[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  mech = document.querySelector("#mech-1"); 

  for(let x = -10; x < 10; x += 2){
    for(let z = -10; z < 10; z += 2){
      let r = new mech(x, 1, z);
      mech.push(r);
    }
  }

  loop();
})

function loop(){
  for(let r of mech){
    r.launch();
  }
  window.requestAnimationFrame( loop );
}

class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let base = document.createElement("a-box");
    base.setAttribute("color","#F5DEB3");
    base.setAttribute("position","0 1 0");
    base.setAttribute("width","3");
    base.setAttribute("height","2");
    base.setAttribute("depth","3");
    this.obj.append(base);

    let roof = document.createElement("a-cone");
    roof.setAttribute("color","red");
    roof.setAttribute("position","0 2.5 0");
    roof.setAttribute("radius-bottom","2");
    roof.setAttribute("height","1.5");
    this.obj.append(roof);

    let door = document.createElement("a-box");
    door.setAttribute("color","brown");
    door.setAttribute("position","0 0.7 1.51");
    door.setAttribute("width","0.7");
    door.setAttribute("height","1.4");
    door.setAttribute("depth","0.1");
    this.obj.append(door);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append(this.obj);
  }
}
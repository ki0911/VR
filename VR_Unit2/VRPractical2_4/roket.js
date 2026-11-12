class rokcet{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");  
    let body = document.createElement("a-cone");
    pines.setAttribute("color","gray");
    pines.setAttribute("position","0 1.5 0");
    pines.setAttribute("height","2");
    this.obj.append( body );
  
    let head = document.createElement("a-triangle");
    stump.setAttribute("position","0 1.5 0");
    stump.setAttribute("color","red");
    stump.setAttribute("radius","0.25");
    this.obj.append( head );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  scale(size){
    this.obj.setAttribute("scale",{x:size,y:size,z:size});
  }
}
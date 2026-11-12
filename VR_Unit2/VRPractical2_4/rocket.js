
class Rocket {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.dy = 0.03 + Math.random() * 0.07;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("position", "0 0.5 0");
    body.setAttribute("radius", "0.2");
    body.setAttribute("height", "1");
    body.setAttribute("color", "gray");
    this.obj.append(body);

    let head = document.createElement("a-cone");
    head.setAttribute("position", "0 1.25 0");
    head.setAttribute("radius-bottom", "0.2");
    head.setAttribute("radius-top", "0");
    head.setAttribute("height", "0.5");
    head.setAttribute("color", "red");
    this.obj.append(head);

    let flame = document.createElement("a-cone");
    flame.setAttribute("position", "0 -0.15 0");
    flame.setAttribute("radius-bottom", "0.12");
    flame.setAttribute("radius-top", "0");
    flame.setAttribute("height", "0.4");
    flame.setAttribute("rotation", "180 0 0");
    flame.setAttribute("color", "orange");
    this.obj.append(flame);

    this.obj.setAttribute("position", {
      x: this.x,
      y: this.y,
      z: this.z
    });

    document.querySelector("a-scene").append(this.obj);
  }

  launch() {
    this.y += this.dy;

    this.obj.setAttribute("position", {
      x: this.x,
      y: this.y,
      z: this.z
    });
  }
}

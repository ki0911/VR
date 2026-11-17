class Rocket {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.dy = 0.03 + Math.random() * 0.04;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("position", "0 0.5 0");
    body.setAttribute("radius", "0.2");
    body.setAttribute("height", "1");
    body.setAttribute("color", "silver");
    this.obj.append(body);

    let head = document.createElement("a-cone");
    head.setAttribute("position", "0 1.25 0");
    head.setAttribute("radius-bottom", "0.2");
    head.setAttribute("radius-top", "0");
    head.setAttribute("height", "0.5");
    head.setAttribute("color", "red");
    this.obj.append(head);

    let fin1 = document.createElement("a-box");
    fin1.setAttribute("position", "-0.2 0.2 0");
    fin1.setAttribute("width", "0.15");
    fin1.setAttribute("height", "0.45");
    fin1.setAttribute("depth", "0.15");
    fin1.setAttribute("rotation", "0 0 -20");
    fin1.setAttribute("color", "darkred");
    this.obj.append(fin1);

    let fin2 = document.createElement("a-box");
    fin2.setAttribute("position", "0.2 0.2 0");
    fin2.setAttribute("width", "0.15");
    fin2.setAttribute("height", "0.45");
    fin2.setAttribute("depth", "0.15");
    fin2.setAttribute("rotation", "0 0 20");
    fin2.setAttribute("color", "darkred");
    this.obj.append(fin2);

    let window = document.createElement("a-sphere");
    window.setAttribute("position", "0 0.65 0.18");
    window.setAttribute("radius", "0.1");
    window.setAttribute("scale", "1 1 0.4");
    window.setAttribute("color", "deepskyblue");
    this.obj.append(window);

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

    scene.append(this.obj);
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

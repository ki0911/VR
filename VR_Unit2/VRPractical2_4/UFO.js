
class UFO {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.dy = 0.02 + Math.random() * 0.06;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("position", "0 0 0");
    body.setAttribute("radius", "1");
    body.setAttribute("height", "0.2");
    body.setAttribute("color", "silver");
    this.obj.append(body);

    let dome = document.createElement("a-sphere");
    dome.setAttribute("position", "0 0.2 0");
    dome.setAttribute("radius", "0.4");
    dome.setAttribute("scale", "1 0.5 1");
    dome.setAttribute("color", "cyan");
    this.obj.append(dome);

    let light = document.createElement("a-sphere");
    light.setAttribute("position", "0 -0.15 0");
    light.setAttribute("radius", "0.15");
    light.setAttribute("color", "yellow");
    this.obj.append(light);

    this.obj.setAttribute("position", {
      x: this.x,
      y: this.y,
      z: this.z
    });

    document.querySelector("a-scene").append(this.obj);
  }

  invade() {
    if (this.y > 0.5) {
      this.y -= this.dy;

      if (this.y < 0.5) {
        this.y = 0.5;
      }

      this.obj.setAttribute("position", {
        x: this.x,
        y: this.y,
        z: this.z
      });
    }
  }
}

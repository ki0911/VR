
class UFO {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.dy = 0.02 + Math.random() * 0.05;
    this.a = 0;
    this.da = 1;

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

    let ring = document.createElement("a-torus");
    ring.setAttribute("position", "0 -0.05 0");
    ring.setAttribute("rotation", "90 0 0");
    ring.setAttribute("radius", "0.85");
    ring.setAttribute("radius-tubular", "0.035");
    ring.setAttribute("color", "blue");
    this.obj.append(ring);

    let antenna = document.createElement("a-cylinder");
    antenna.setAttribute("position", "0 0.55 0");
    antenna.setAttribute("radius", "0.035");
    antenna.setAttribute("height", "0.3");
    antenna.setAttribute("color", "gray");
    this.obj.append(antenna);

    let antennaLight = document.createElement("a-sphere");
    antennaLight.setAttribute("position", "0 0.73 0");
    antennaLight.setAttribute("radius", "0.1");
    antennaLight.setAttribute("color", "red");
    this.obj.append(antennaLight);

    // Colorful lights
    let colors = [
      "red", "yellow", "cyan", "lime",
      "orange", "magenta", "blue", "white"
    ];

    for (let i = 0; i < 8; i++) {
      let light = document.createElement("a-sphere");

      light.setAttribute("position", {
        x: -0.7 + 0.2 * i,
        y: -0.15,
        z: 0.65
      });

      light.setAttribute("radius", "0.09");
      light.setAttribute("color", colors[i]);
      this.obj.append(light);
    }

    this.obj.setAttribute("position", {
      x: x,
      y: y,
      z: z
    });

    scene.append(this.obj);
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

  spin() {
    this.a += this.da;
    this.obj.setAttribute("rotation", {
      x: 0,
      y: this.a,
      z: 0
    });
  }
}

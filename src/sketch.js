function setup() {
  const myCanvas = createCanvas(400, 400, WEBGL);
  myCanvas.parent("pagecontainer");
  angleMode(DEGREES);
}

function draw() {
  background(30);

  rotateX(60);

  noFill();
  stroke(200, 20, 20);

  for (var i = 0; i < 20; i++) {
    var r = map(sin(frameCount), -1, 1, 0, 5);
    var g = map(i, 0, 20, 0, 255);
    var b = map(cos(frameCount), -1, 1, 255, 0);

    stroke(r * 120, g, b);

    beginShape();
    for (var j = 0; j < 660; j += 10) {
      var rad = i * 3;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 100) * 100;

      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}

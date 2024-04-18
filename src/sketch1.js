function setup() {
  const myCanvas = createCanvas(450, windowHeight * 1.8, WEBGL);
  myCanvas.parent("pagecontainer");
  angleMode(DEGREES);
}

function draw() {
  background(50);

  noFill();
  stroke(250, 20, 20);

  rotateY(map(mouseX, 0, width, 0, 20) * 0.9);
  rotateX(10);

  for (var i = 0; i < 500; i++) {
    var r = map(sin(frameCount), -1, 1, 100, 100);
    var g = map(i, 0, 20, 0, 200);
    var b = map(cos(frameCount), -1, 1, 255, 0);

    stroke(r * 90, g, b);

    beginShape();

    for (var j = 0; j < 2000; j += 100) {
      var rad = i * (mouseY * 0.1);

      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount * 2 + i * 10) * (mouseY * 0.09);

      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}

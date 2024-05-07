let myCanvas;

function setup() {
  createCanvasWindow();
  angleMode(DEGREES);
}

function createCanvasWindow() {
  const canvasWidth = min(450, windowWidth);
  const canvasHeight = windowHeight * 1.1;

  if (myCanvas) {
    resizeCanvas(canvasWidth, canvasHeight);
  } else {
    myCanvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
    myCanvas.parent("pagecontainer");
  }
}

function draw() {
  background(50);

  noFill();
  stroke(250, 20, 20);

  rotateY(map(mouseX, 0, width, 0, 20) * 0.9);
  rotateX(10);

  translate(0, -50);
  var radValues = [];
  for (var i = 0; i < 500; i++) {
    var constrainedMouseY = constrain(mouseY, 50, height - 50);
    radValues[i] = i * (constrainedMouseY * 0.1);
  }

  for (var i = 0; i < 500; i++) {
    var r = map(sin(frameCount), -1, 1, 100, 100);
    var g = map(i, 0, 20, 0, 200);
    var b = map(cos(frameCount), -1, 1, 255, 0);

    stroke(r * 90, g, b);

    beginShape();

    for (var j = 0; j < 2000; j += 100) {
      var x = radValues[i] * cos(j);
      var y = radValues[i] * sin(j);
      var z = sin(frameCount * 2 + i * 10) * (mouseY * 0.09);

      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}

function windowResized() {
  createCanvasWindow();
}

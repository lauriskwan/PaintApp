function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

var origX, origY, timeout;
var density = 30;
// script for stack:
var tempX = [];
var tempY = [];
// end of script for stack

class Spray extends PaintFunction {
  // This class extends the PaintFunction class
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.context.fillStyle = currentColor;
    contextReal.lineJoin = contextReal.lineCap = "round";
    origX = coord[0];
    origY = coord[1];
    timeout = setTimeout(function draw() {
      for (var i = density; i > 0; i--) {
        var angle = getRandomFloat(0, Math.PI * 2);
        var radius = getRandomFloat(0, 20);
        var randomX = origX + radius * Math.cos(angle);
        var randomY = origY + radius * Math.sin(angle);

        // script for stack
        tempX.push(randomX);
        tempY.push(randomY);
        // end of script for stack

        contextReal.fillRect(randomX, randomY, 1, 1);
      }

      if (!timeout) return;
      timeout = setTimeout(draw, 50);
    }, 50);
  }
  onDragging(coord, event) {
    origX = coord[0];
    origY = coord[1];
  }

  onMouseMove() {}
  onMouseUp() {
    clearTimeout(timeout);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}

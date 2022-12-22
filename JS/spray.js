// class Spray extends PaintFunction {
//   constructor(contextReal) {
//     super();
//     this.context = contextReal;
//     this.timeout;
//     this.density = 50;

//     this.test = function getRandomFloat(min, max) {
//       return Math.random() * (max - min) + min;
//     }
//   }

//   onMouseDown(coord, event) {
//     this.context.lineJoin = this.context.lineCap = "round";
//     this.origX = coord[0];
//     this.origY = coord[1];
//     this.context.fillStyle = "#000000"
//     this.context.beginPath()

//     this.timeout = setTimeout(function doSpray() {
//       for (var i = this.density; i--; ) {
//         var angle = this.test(0, Math.PI * 2);
//         var radius = this.test(0, 30);
//         this.context.globalAlpha = Math.random();
//         this.context.fillRect(
//           this.origX + radius * Math.cos(angle),
//           this.origY + radius * Math.sin(angle),
//           this.test(1, 2),
//           this.test(1, 2)
//         );
//       }
//       if (!this.timeout) return;
//       this.timeout = setTimeout(doSpray, 50);
//     }, 50);
//   }

//   onDragging(coord, event) {
//     this.origX = coord[0];
//     this.origY = coord[1];
//   }
//   onMouseMove() {}
//   onMouseUp() {
//     clearTimeout(this.timeout)
//   }
//   onMouseLeave() {}
//   onMouseEnter() {}

// }

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

var x, y, timeout;
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
    x = coord[0];
    y = coord[1];
    timeout = setTimeout(function draw() {
      for (var i = density; i > 0; i--) {
        var angle = getRandomFloat(0, Math.PI * 2);
        var radius = getRandomFloat(0, 20);
        var randomX = x + radius * Math.cos(angle);
        var randomY = y + radius * Math.sin(angle);

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
    x = coord[0];
    y = coord[1];
  }

  onMouseMove() {}
  onMouseUp() {
    clearTimeout(timeout);

    // script for stack
    drawSprayBrush1(tempX, tempY, this.context.fillStyle, this.context);
    tempX = [];
    tempY = [];
    // end of script for stack
  }
  onMouseLeave() {}
  onMouseEnter() {}
}

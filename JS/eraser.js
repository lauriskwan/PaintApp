let currentEraserSize = 5;

class Eraser extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord, event) {
    // Set eraser
    this.context.globalCompositeOperation = `destination-out`;  // Use destination-out to draw transparent stroke which clears px underneath.  

    this.context.beginPath(); // Reset previous path every time mouse down occurs
    this.context.arc(coord[0], coord[1], currentEraserSize, 0, Math.PI * 2);
    this.draw(coord[0], coord[1]); // gives a circle by clicking
  }
  onDragging(coord, event) {
    this.context.globalCompositeOperation = `destination-out`;

    this.context.beginPath(); 
    this.context.arc(coord[0], coord[1], currentEraserSize, 0, Math.PI * 2);
    this.draw();
  }
  onMouseMove() {}
  onMouseUp() {
    this.context.globalCompositeOperation = `source-over`;  // Stop destination-out which clears existing content
  }
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.fill();
  }
}
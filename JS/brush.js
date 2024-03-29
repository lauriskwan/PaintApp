let currentBrushSize = 20;

class Brush extends PaintFunction {
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  onMouseDown(coord, event) {
    // Fill in the color
    this.context.fillStyle = currentColor;
    // Start brushing
    this.context.beginPath(); // Reset previous path every time mouse down occurs
    this.context.arc(coord[0], coord[1], currentBrushSize, 0, Math.PI * 2);
    this.draw(coord[0], coord[1]); // gives a circle by clicking
  }
  onDragging(coord, event) {
    // Every time mouse down happens, dragging = true in global.js, thus triggering onDragging.
    this.context.beginPath(); // Reset previous path every time mouse down occurs
    this.context.arc(coord[0], coord[1], currentBrushSize, 0, Math.PI * 2);
    this.draw();
  }
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.fill();
  }
}

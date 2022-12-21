class Pen extends PaintFunction {
  
  constructor(contextReal) {
    super();
    this.context = contextReal;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    // Fill in the color
    this.context.strokeStyle = "#000000";
    // Kind of line
    this.context.lineCap = "round";
    // Width of line
    this.context.lineWidth = 1;
    // Drawing the line here
    this.context.beginPath();                 // Reset previous path every time mouse down occurs
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);            // Together with lineCap it allows drawing on click, instead of only dragging
  }
  // Clicking and removing your mouse
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    //
    this.context.lineTo(x, y);
    // Draw the line onto the page
    this.context.stroke();
  }
}

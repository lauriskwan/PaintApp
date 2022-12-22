class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    // this.color = currentColor;
  }
  onMouseDown(coord, event) {
    console.log(coord);
    this.contextReal.fillStyle = currentColor;
    // variable assignment  - this.origX = coord[0]
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.arc(
      coord[0],
      coord[1],
      coord[1] - this.origY,
      0,
      2 * Math.PI
    );
    this.contextDraft.fillStyle = currentColor;
    this.contextDraft.fill();
  }
  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.arc(
      coord[0],
      coord[1],
      coord[1] - this.origY,
      0,
      2 * Math.PI
    );
    this.contextReal.fillStyle = currentColor;
    this.contextReal.shadowBlur = 0;
    this.contextReal.shadowColor = currentColor;
    this.contextReal.fill();
    // this.contextReal.lineWidth = 5;
    // this.contextReal.strokeStyle = '#9370DB';
    // this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}

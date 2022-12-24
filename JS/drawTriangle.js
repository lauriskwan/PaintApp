class DrawingTriangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    // this.color = currentColor;
  }
  onMouseDown(coord, event) {
    // console.log(coord);
    this.contextReal.fillStyle = currentColor;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.fillStyle = currentColor;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.lineTo(this.origX + (this.origX - coord[0]), coord[1]);
    this.contextDraft.fill();
  }
  onMouseMove() {}
  onMouseUp(coord) {
    this.contextReal.fillStyle = currentColor;
    this.contextReal.shadowBlur = 0;
    this.contextReal.shadowColor = currentColor;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.lineTo(this.origX + (this.origX - coord[0]), coord[1]);
    this.contextReal.fill();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
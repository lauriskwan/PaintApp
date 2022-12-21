class DrawingLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.strokeStyle = "#000000";
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineWidth = 5;
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
  }
  onMouseMove() {}
  onMouseUp(coord, event) {
    this.contextReal.strokeStyle = "#000000";
    this.contextReal.lineJoin = "round";
    this.contextReal.lineWidth = 5;
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // saveRestorePoint();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
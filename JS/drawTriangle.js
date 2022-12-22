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
    this.contextReal.shadowColor = "#000000";
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

// // hardcoded, but you would get those from user
// var AB = 40;
// var BC = 50;
// var AC = 30;

// var A = [0, 0]; // starting coordinates
// var B = [0, AB];
// var C = [];

// // calculate third point
// C[1] = (AB * AB + AC * AC - BC * BC) / (2 * AB);
// C[0] = Math.sqrt(AC * AC - C[1] * C[1]);
// console.log(A, B, C);

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(A[0], A[1]);
// ctx.lineTo(B[0], B[1]);
// ctx.lineTo(C[0], C[1]);
// ctx.fill();

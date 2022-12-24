let currentBCurveWidth = 1.5;

class BezierCurve extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.lineMade = false;
  }

  onMouseDown(coord, event) {
    if (this.lineMade === false) {
      this.origX = coord[0];
      this.origY = coord[1];
    } else {
    }
  }

  onDragging(coord, event) {
    if (this.lineMade === false) {
      this.lineXEnd = coord[0];
      this.lineYEnd = coord[1];
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);

      this.contextDraft.lineWidth = currentBCurveWidth;
      this.contextDraft.strokeStyle = currentColor;

      this.contextDraft.stroke();
      // this.lineMade = true;
    } else if (this.lineMade === true) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.quadraticCurveTo(
        coord[0],
        coord[1],
        this.lineXEnd,
        this.lineYEnd
      );
      this.contextDraft.stroke();

      this.contextDraft.lineWidth = currentBCurveWidth;
      this.contextDraft.strokeStyle = currentColor;

      this.contextDraft.beginPath();
      this.contextDraft.arc(coord[0], coord[1], 10, 0, 2 * Math.PI);
      this.contextDraft.fillStyle = currentColor;
      this.contextDraft.fill();
    }
  }

  onMouseMove() {}
  onMouseUp(coord) {
    if (this.lineMade === false) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();

      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);

      this.contextDraft.lineWidth = currentBCurveWidth;
      this.contextDraft.strokeStyle = currentColor;
      this.contextDraft.stroke();

      // CIRCLE
      this.contextDraft.beginPath();
      this.contextDraft.arc(
        (coord[0] + this.origX) / 2,
        (coord[1] + this.origY) / 2,
        10,
        0,
        2 * Math.PI
      );
      this.contextDraft.fillStyle = currentColor;
      this.contextDraft.fill();

      this.lineMade = true;
    } else if (this.lineMade === true) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.beginPath();

      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.quadraticCurveTo(
        coord[0],
        coord[1],
        this.lineXEnd,
        this.lineYEnd
      );

      this.contextReal.lineWidth = currentBCurveWidth;
      this.contextReal.strokeStyle = currentColor;
      this.contextReal.stroke();

      this.lineMade = false;
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
